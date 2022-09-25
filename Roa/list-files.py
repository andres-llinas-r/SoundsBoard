import os
import json

# folder path
base_dir = os.getcwd()
print(base_dir)
dir = os.path.join(base_dir, "sounds")
print(dir)
# list to store files
sounds = []
res = {}

files = [f for f in os.listdir(dir) if f.endswith(".mp3")]
for f in files:
    # Replaces spaces in filenames
    newPath = os.path.join(dir, f.replace(" ","-"))
    if( newPath != f):
        os.rename(os.path.join(dir, f),newPath)
    
    # Creates attributes for the sound object
    filename = os.path.splitext(f)[0]
    myobj = {}
    myobj["text"] = filename
    myobj["soundURL"] = "https://raw.githubusercontent.com/andres-llinas-r/SoundsBoard/dev/Roa/sounds/"+f
    myobj["tag"] = ""

    sounds.append(myobj)

res["title"] = "Roa Sounds Table"
res["sounds"] = sounds

with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(res, f, ensure_ascii=False, indent=4)
