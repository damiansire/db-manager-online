from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin
import bdDao;

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/v1/AllTables', methods=['GET'])
@cross_origin()
def get_all_tables():
	all_tables = bdDao.get_all_tables()
	return jsonify(all_tables)

@app.route('/api/v1/getTableColumn/<tableName>', methods=['GET'])
@cross_origin()
def get_table_column(tableName):
	print("hola")
	table_column = bdDao.get_table_column(tableName)
	return jsonify(table_column)

app.run(debug=True, port=5555)

