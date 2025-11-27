from PIL import Image
import os

# Process the colored logo for navbar
print("Processing colored logo...")
img = Image.open('public/images/branding/alomda logo.jpg')
img = img.convert("RGBA")

# Get image data
datas = img.getdata()
newData = []

# Make white/light backgrounds transparent
for item in datas:
    # If pixel is close to white (RGB values > 240), make it transparent
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save('public/images/branding/alomda-logo.png', "PNG")
print("✓ Colored logo saved as PNG")

# Process the white logo for footer
print("\nProcessing white logo...")
img_white = Image.open('public/images/branding/alomda-logo-white.jpg')
img_white = img_white.convert("RGBA")

datas_white = img_white.getdata()
newData_white = []

# Make dark backgrounds transparent (for white logo on dark bg)
for item in datas_white:
    # If pixel is close to black/dark (RGB values < 15), make it transparent
    if item[0] < 15 and item[1] < 15 and item[2] < 15:
        newData_white.append((255, 255, 255, 0))
    else:
        newData_white.append(item)

img_white.putdata(newData_white)
img_white.save('public/images/branding/alomda-logo-white.png', "PNG")
print("✓ White logo saved as PNG")

# Process the favicon
print("\nProcessing favicon...")
favicon = Image.open('public/images/branding/alomda-favicon.jpg')
favicon = favicon.convert("RGBA")

datas_fav = favicon.getdata()
newData_fav = []

# Make white/light backgrounds transparent
for item in datas_fav:
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        newData_fav.append((255, 255, 255, 0))
    else:
        newData_fav.append(item)

favicon.putdata(newData_fav)

# Resize favicon to standard sizes
favicon_16 = favicon.resize((16, 16), Image.Resampling.LANCZOS)
favicon_32 = favicon.resize((32, 32), Image.Resampling.LANCZOS)
favicon_180 = favicon.resize((180, 180), Image.Resampling.LANCZOS)

favicon_16.save('public/favicon-16x16.png', "PNG")
favicon_32.save('public/favicon-32x32.png', "PNG")
favicon_180.save('public/apple-touch-icon.png', "PNG")
favicon.save('public/images/branding/alomda-favicon.png', "PNG")

print("✓ Favicon saved in multiple sizes")
print("\n✅ All images processed successfully!")
