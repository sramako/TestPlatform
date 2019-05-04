function getRestaurants() {
    ret = new Object();
    $.ajax({
        url: "https://piedp.herokuapp.com/restaurants",
        data:{
        },
        // datatype: 'json',
        async: false,
        success: function(data){
            // console.log("in rest"+JSON.stringify(data));
            ret["data"]=JSON.stringify(data);
            // return JSON.stringify(data);
        }});
        return ret["data"];
};

function getCategory(name) {
    // var name = getRestaurants();
    ret=new Object();
    $.ajax({
        url : "https://piedp.herokuapp.com/category",
        data :{
            "name": name
        },
        datatype: 'json',
        async: false,
        success:function(data){

            // console.log("in getcat"+ JSON.stringify(data))
            ret["cat"]=data;
        }});
        return ret["cat"];
};

function getSearch(query)
{
    ret=new Object();
    $.ajax({
        url : "https://piedp.herokuapp.com/search",
        data :{
            "query": query
        },
        datatype: 'json',
        async: false,
        success:function(data){

            // console.log("in getcat"+ JSON.stringify(data))
            ret["q"]=data;
        }});
        return ret["q"];
}

function getMenu(name) {
    ret= new Object();
    $.ajax({
        url: "http://piedp.herokuapp.com/menu",
        data: {
            "name": getRestaurants()
        },
        async:false,
        datatype: 'json',
        success: function(data){
            // console.log(data)
            // name=data
            // console.log(name)
            ret["menu"]=data;
        }});
        return ret["menu"];
};

function getCategoryContent(name,category) {
    ret=new Object();
    $.ajax({
        url: "http://piedp.herokuapp.com/categorycontent",
        data :{
			"name":name,
			"category":category
            // "name": getRestaurants(),
            // "category":getCategory(name)
        },
        datatype: 'json',
        async: false,
        success: function(data){
            // console.log(data)
            // name=data
            // console.log(name)
            ret["content"]=data;
            // console.log(data);

        }});
        return ret["content"];
};

function getPrice(name,item) {
	var price=0;
	$.ajax({
	    url: "https://piedp.herokuapp.com/price",
	    dataType: 'json',
	    data: {
			"restaurant":name,
			"item":item,
		},
	    async: false,
	    success: function(data){
			if(data["price"]!="NF") {
				price = data["price"]
			}
	    }
	});
	return price;
};
