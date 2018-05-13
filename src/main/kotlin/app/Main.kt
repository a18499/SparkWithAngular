package app


import spark.Request
import spark.Response
import spark.Spark.*

fun main(args: Array<String>) {
    // Using string/html
    notFound("<html><body><h1>Custom 404 handling</h1></body></html>")
    staticFiles.location("/public")


    get("/hello",{request:Request,response:Response -> "Hello Word!!"})
    get("/hellojson",{ req, res ->
        res.type("application/json")
        "{\"message\":\"Hello Word\"}"
    })
    notFound { req, res ->
        res.type("application/json")
        "{\"message\":\"Custom 404\"}"
    }
}
