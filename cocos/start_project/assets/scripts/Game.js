// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // 这个属性引用了星星预制资源
        starPrefeb:{
            default:null,
            type:cc.Prefab,
        },
        // 星星产生后消失时间的随机范围
        maxStarDuration:0,
        minStarDuration:0,
        // 地面节点，用于确定星星生成的高度
        ground:{
            default:null,
            type:cc.Node
        },
        // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
        player:{
            default:null,
            type:cc.Node
        }
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //获取地面Y坐标
        this.groundY=this.groundY+this.ground.height/2;
        //生成一个新的星星
        this.spawnNewStar();
    },
    spawnNewStar:function(){
        var newStar=cc.instantiate(this.starPrefeb);
        this.node.addChild(newStar);
        newStar.setPosition(this.getNewStarPosition());
         // 将 Game 组件的实例传入星星组件
        newStar.getComponent('Star').game=this;
    },

    getNewStarPosition:function(){
        var randX=0;
        var randY=this.groundY+cc.random0To1()*this.player.getComponent('player').jumpHeight+50;
        var maxX=this.node.width/2;
        randX=cc.randomMinus1To1()*maxX;
        return cc.p(randX,randY)
    },

    start () {

    },

    // update (dt) {},
});
