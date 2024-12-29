
const keys=require("./keys")
const redis=require("redis")


const redisClient=redis.createClient({
    url: `redis://${keys.REDIS_HOST}:${keys.REDIS_PORT}`
    // host:keys.REDIS_HOST,
    // port:keys.REDIS_PORT,
    // retry_strategy:()=>1000
})


const fib=(index)=>{
    if(index<2){
        return 1
    }
    else{
        return fib(index-1)+fib(index-2)
    }
}
(async ()=>{
    await redisClient.connect()

    sub=redisClient.duplicate()

    await sub.connect()

    sub.subscribe("insert", (message)=>{
        redisClient.hSet("values", message, fib(parseInt(message)))

    })
})()



















































































