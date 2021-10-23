put test
{
  "mappings":{
    
    "properties":{
      "id": {"type":"text"},
      "name": { "type":"text"}
    }
  }
}

POST test/_doc?refresh
{
  "id": "1",
  "name": "ali"
}

POST test/_doc?refresh
{
  "id": "2",
  "name": "saad"
}

POST test/_search
{
  "query": {  
    
    "match_all": {}
  }
}

POST test/_update_by_query
{
  "query": {
    "match": {
      "id": "2"
    }
  },
    "script": {
      "source": "ctx._source.name = 'bilal'",
      "lang": "painless",
      "params": {
        "name": "bilal"
      }
    }
}
