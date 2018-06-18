from pymongo import MongoClient

client = MongoClient("mongodb://127.0.0.1:27017")

db = client["examSystem"]
collection = db["example"]

result = collection.aggregate([
    {
        "$project": {
            "question": 1,
            "answer": 1,
        }
    },
    {
        "$match": {
            "answer": {
                "$in": ["good", "yes"]
            }
        }
    },
    {
        "$skip": 2
    },
    {
        "$limit": 2
    }
])

for val in result:
    print(val)

client.close()
