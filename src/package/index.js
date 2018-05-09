import Cache from './redis'
const INSTANCE = Symbol('flight#PLUGINS')
const CACHE = Symbol('flight#CACHE')
const ACT_MIT = Symbol('flight#ACT_MIT')

class Bootstrap {
    constructor(opt){
        this[CACHE] = new Cache(opt.redis)
    }
    bootstrap(plugins){
        // 
    }
    async [ACT_MIT](){}
    commit(){}
}

export default opt => new Bootstrap(opt)