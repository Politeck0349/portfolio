import torch
from glob import glob
import shutil
import os
import requests
from bs4 import BeautifulSoup
import urllib
from keras.models import load_model  # TensorFlow is required for Keras to work
from PIL import Image, ImageOps  # Install pillow instead of PIL
import numpy as np

a = input('가자: ')
def save_image(url, filename):
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        with open(filename, 'wb') as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)
    except requests.exceptions.RequestException as e:
        print('Error:', e)
def save_google_photos(query, num_photos):
    query = urllib.parse.quote_plus(query)
    url = f'https://www.google.com/search?q={query}&source=lnms&tbm=isch'
    response = requests.get(url)
    response.raise_for_status()
    soup = BeautifulSoup(response.content, 'html.parser')
    images = soup.find_all('img')
    count = 0
    for image in images:
        if count >= num_photos:
            break
        image_url = image['src']
        filename = f'{count+1}.jpg'
        save_image(image_url, filename)
        count += 1
        print(f'Saved photo: {filename}')
save_google_photos(a, 20)

def find_people():
    img_path = r'C:/Users/Mac001/LJH/project'
    img_list = glob(img_path+'\*.jpg')
    img_list.extend(glob(img_path+'\*.png'))

    print(img_list)

    model = torch.hub.load('ultralytics/yolov5','yolov5s')
    img_move_path = r'C:/Users/Mac001/LJH/project/img_people'
    for img_path in img_list:
        results = model(img_path)
        print(img_path)
        for pred in results.pred[0]:
            tag = results.names[int(pred[-1])]
            print(tag)
            if tag == "person":
                    np.set_printoptions(suppress=True)
                    model = load_model("keras_Model.h5", compile=False)
                    class_names = open("labels.txt", "r").readlines()
                    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
                    image = Image.open("C:/Users/Mac001/LJH/project/img_people").convert("RGB")
                    size = (224, 224)
                    image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)
                    image_array = np.asarray(image)
                    normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1
                    data[0] = normalized_image_array
                    prediction = model.predict(data)
                    index = np.argmax(prediction)
                    class_name = class_names[index]
                    confidence_score = prediction[0][index]
                    if class_name == 'man':
                        print("move")
                        shutil.move(img_path,img_move_path+'man/'+'\\ '+os.path.basename(img_path))
                        break
                    else:
                        print("move")
                        shutil.move(img_path,img_move_path+'girl/'+'\\ '+os.path.basename(img_path))
                        break


find_people()
