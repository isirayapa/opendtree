import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = myclient["mydatabase"]

mycol = mydb["customers"]

mydict = { "name": "isira", "address": "john keells Research" }

mycol = mydb["questions"]

# x = mycol.insert_one(mydict)

def fetch_questions_from_db():	
	for x in mycol.find():	
	  print(x)

def insert_questions_to_db():
	mycol.insert_one(mydict)


