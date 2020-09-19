import io
import os
from google.cloud import vision
from google.cloud.vision import types

class Analyzer:

	def analyze(self, img_path):
		client = vision.ImageAnnotatorClient()
		file_name = os.path.abspath(img_path)
		with io.open(file_name, 'rb') as image_file:
			content = image_file.read()
		image = types.Image(content=content)
		response = client.face_detection(image=image)
		labels = response.face_annotations
		return labels