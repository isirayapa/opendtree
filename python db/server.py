from bottle import Bottle, route, run, request, redirect,response
import json
import db_mongo
from login_validation import check_login

app = Bottle()

@app.hook('after_request')

def enable_cors():
    """
    You need to add some headers to each request.
    Don't use the wildcard '*' for Access-Control-Allow-Origin in production.
    """
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'




  		
@app.route('/submit',method=['POST', 'OPTIONS'])
def submit():
	if request.method=='POST':
		data = json.load(request.body)
		print(json.dumps(data, indent=4, sort_keys=True))
		db_mongo.insert_questions_to_db()
		return "<p>Success</p>"

	

@app.route('/fetch', method=['OPTIONS', 'GET'])
def examples():
    """
    If you are using something like Spine.js you'll need to
    handle requests for the OPTIONS method. I haven't found a
    DRY way to handle this yet. I tried setting up a hook for before_request,
    but was unsuccessful for now.
    """
    if request.method == 'OPTIONS':
        return {}
    else:
        return {'examples': [{
            'id': 1,
            'name': 'Foo'},{
            'id': 2,
            'name': 'Bar'}
        ]}

@app.route('/login')
def login():
    return '''
        <form action="/login" method="post">
            Username: <input name="username" type="text" />
            Password: <input name="password" type="password" />
            <input value="Login" type="submit" />
        </form>
    '''

@app.route('/login', method='POST')
def do_login():

    username = request.forms.get('username')
    password = request.forms.get('password')

    if check_login(username, password):
        return redirect('/hello')
    else:
        return "<p>Login failed.</p>"



if __name__ == '__main__':
    from optparse import OptionParser
    parser = OptionParser()
    parser.add_option("--host", dest="host", default="localhost",
                      help="hostname or ip address", metavar="host")
    parser.add_option("--port", dest="port", default=8080,
                      help="port number", metavar="port")
    (options, args) = parser.parse_args()
    run(app, host=options.host, port=int(options.port))