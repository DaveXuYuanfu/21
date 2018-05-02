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
        pickRadius:0,
        game:{
            default:null,
            serializable:false
        }
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    // getPlayerDistance:function(){
    //     // 根据 player 节点位置判断距离
    //     cc.log(this.game);
    //     var playerPos=this.game.player.getPosition();
    //     // 根据两点位置计算两点之间距离
    //     var distance=cc.pDistance(this.node.position,playerPos);
    //     return distance;
    // },
    // onpicked:function(){
    //     // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
    //     this.game.spawnNewStar();
    //     // 然后销毁当前星星节点
    //     this.node.destroy();
    // },

    start () {

    },

    // update (dt) {
    //     if (this.getPlayerDistance()<this.pickRadius){
    //         this.onpicked();
    //         return;
    //     }
    // },
});
