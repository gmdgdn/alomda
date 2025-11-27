from PIL import Image
import os

def optimize_image(input_path, output_path, max_width=None, quality=85):
    """
    Optimize an image by resizing and converting to WebP.
    
    Args:
        input_path: Path to input image
        output_path: Path to output WebP image
        max_width: Maximum width (maintains aspect ratio)
        quality: WebP quality (0-100)
    """
    try:
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            
            # Resize if max_width specified
            if max_width and img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Ensure output directory exists
            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            
            # Save as WebP
            img.save(output_path, 'WEBP', quality=quality, method=6)
            
            # Get file sizes
            input_size = os.path.getsize(input_path) / 1024  # KB
            output_size = os.path.getsize(output_path) / 1024  # KB
            
            print(f"✓ {os.path.basename(input_path)}")
            print(f"  {input_size:.1f}KB -> {output_size:.1f}KB ({100 * (1 - output_size/input_size):.1f}% reduction)")
            
            return True
    except Exception as e:
        print(f"✗ Error processing {input_path}: {e}")
        return False

def main():
    print("=== Optimizing Al-Omda Images ===\n")
    
    # Logo optimization (max 300px width, high quality)
    print("Optimizing Logo Files:")
    logo_files = [
        ("public/images/branding/alomda-logo.png", "src/assets/branding/alomda-logo.webp", 300),
        ("public/images/branding/alomda-logo-white.png", "src/assets/branding/alomda-logo-white.webp", 300),
    ]
    
    for input_path, output_path, max_width in logo_files:
        if os.path.exists(input_path):
            optimize_image(input_path, output_path, max_width=max_width, quality=90)
        else:
            print(f"✗ File not found: {input_path}")
    
    print("\nOptimizing Hero Images:")
    hero_files = [
        ("public/images/hero-villa.png", "src/assets/images/hero-villa.webp", None),
        ("public/images/service-majlis.png", "src/assets/images/service-majlis.webp", None),
        ("public/images/service-kitchen.png", "src/assets/images/service-kitchen.webp", None),
    ]
    
    for input_path, output_path, max_width in hero_files:
        if os.path.exists(input_path):
            optimize_image(input_path, output_path, max_width=max_width, quality=85)
        else:
            print(f"✗ File not found: {input_path}")
    
    print("\nCopying Service Images (already WebP):")
    service_files = [
        "acs-cover.webp",
        "appliances-cover.webp",
        "bedroom-cover.webp",
        "general-cover.webp",
        "kitchen-cover.webp",
        "office-cover.webp",
    ]
    
    # For WebP files, we can still optimize them
    for filename in service_files:
        input_path = f"public/images/services/{filename}"
        output_path = f"src/assets/images/services/{filename}"
        if os.path.exists(input_path):
            optimize_image(input_path, output_path, quality=85)
        else:
            print(f"✗ File not found: {input_path}")
    
    print("\n=== Optimization Complete ===")

if __name__ == "__main__":
    main()
