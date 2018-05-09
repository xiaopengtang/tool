import redis from 'redis'
import EventEmitter from 'events'
const INSTANCE = Symbol('flight#INSTANCE')
class Cache extends EventEmitter{
    constructor(opt){
        opt = opt || {}
        opt.retry_strategy = opt.retry_strategy || (options => {
            // 
        })
        this[INSTANCE] = redis.createClient(opt)
        this[INSTANCE].on('error', e => this.emit('error', e))
    }
    createInstance(cls){
        cls.prototype.get = function(name){
            return this[INSTANCE].multi().get(name).execAsync()
        }
        cls.prototype.set = function(...arg){
            returnthis[INSTANCE].multi().set(...arg).execAsync()
        }
        cls.prototype.del = function(name){
            return this.set(name, null)
        }
        return new cls()
    }
}

export default Cache