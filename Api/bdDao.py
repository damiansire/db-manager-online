import pymysql
import baseconect

def get_bd_connection():
    connection_bd = pymysql.connect(
        user = baseconect.bdUser, 
        password=baseconect.password, 
        host = baseconect.host, 
        database=baseconect.bdName )
    return connection_bd

def execute_query(query):
    connection_bd = get_bd_connection()
    cursor = connection_bd.cursor()
    sql_table_created = query
    cursor.execute(sql_table_created)
    connection_bd.commit()
    cursor.close()
    connection_bd.close()

def create_data_table():
    table1_query = """CREATE TABLE TablaDeCodigos( code VARCHAR(60));"""
    execute_query(table1_query)
    table2_query = """CREATE TABLE Prueba ( code VARCHAR(60), address VARCHAR(200));"""
    execute_query(table2_query)
    table3_query = """CREATE TABLE Cosas ( code VARCHAR(60), address VARCHAR(200), city VARCHAR(200));"""
    execute_query(table3_query)

def get_all_tables():
    connection_bd = get_bd_connection()
    cursor = connection_bd.cursor()
    select_all_tables = "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.Tables WHERE table_schema = '{}';".format(baseconect.bdName)
    cursor.execute(select_all_tables)
    rows = cursor.fetchall()
    allTables = []
    for row in rows:
        allTables.append(row)
    return allTables

def get_execute_query(query):
    connection_bd = get_bd_connection()
    cursor = connection_bd.cursor()
    cursor.execute(query)
    rows = cursor.fetchall()
    allResults = []
    for row in rows:
        allResults.append(row)
    return allResults

def get_table_column(table):
    sql_query = "SELECT column_name, ORDINAL_POSITION, IS_NULLABLE, COLUMN_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'{}'".format(table)
    return get_execute_query(sql_query)