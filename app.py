from flask import Flask, render_template, jsonify, request, url_for

app = Flask(__name__)

from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.dbsparta

@app.route('/')
def main_get(num=None):
    return render_template('index.html', num=num)

# 주문하기(POST) API
@app.route('/order', methods=['POST'])
def order():
    address_receive = request.form['address_give']

    doc = {'address': address_receive}

    db.TEST.insert_one(doc)
    return jsonify({'msg': '주문 완료!'})



# 주문 목록보기(Read) API
@app.route('/order', methods=['GET'])
def view_orders():
    orders = list(db.TEST.find({},{'_id':False}))
    return jsonify({'view_orders': orders})

#주소검색
# @app.route('/search', methods=['POST'])
# def view_Search():
#     adres_receive = request.form.get('adres_give')
#     search = list(db.TEST.find({'address':adres_receive},{'_id':False}))
#     return jsonify({'view_Search': search})

@app.route('/search', methods=['GET'])
def view_Search():
    test1 = request.args.get('search')
    print(test1)
    search = list(db.TEST.find({'address':test1},{'_id':False}))
    print(search)
    return jsonify({'view_Search':search})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)