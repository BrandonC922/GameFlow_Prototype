class LoseScreen extends Phaser.Scene {
    constructor() {
        super('losescreen')
    }
    create() {
        let sCX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let sCY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.header = this.add.text(sCX, -sCY*.2083, `Game Over!`, {font:`Bold ${.125*sCY}px Arial`,color:`#000`}).setOrigin(.5,0);
        this.go_desc = this.add.text(sCX, sCY, `Don't Give up!`, {font:`${.1667*sCY}px Arial`,color:`#000`}).setOrigin(.5).setAlpha(0);
        this.click_desc = this.add.text(sCX, sCY*1.5, `Tap anywhere to restart.`, {
            font:`${.1*sCY}px Arial`,color:`#000`}).setOrigin(.5,1).setAlpha(0);
        this.cameras.main.fadeIn(500, 0,0,0);
        this.time.delayedCall(1000, () => this.tweens.add({targets: this.header, y: sCY*.1042, duration: 2000, ease: 'Quint.Out'}));
        this.time.delayedCall(2000, () => this.tweens.add({targets: this.go_desc, alpha: 1, duration: 1250}));
        this.time.delayedCall(3000, () => this.tweens.add({targets: this.click_desc, alpha: 1, duration: 1250}));
        
        this.input.on('pointerdown', () => {
            this.input.removeAllListeners();
            this.cameras.main.fade(1000, 255,255,255,true);
            this.time.delayedCall(1000, () => this.scene.start('gameplayscreen'));
        })
    }
}

class GameplayScreen extends Phaser.Scene {
    constructor() {
        super('gameplayscreen')
    }
    create() {
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.text(screenCenterX, screenCenterY, 'Main Menu', {
            font:`${.16*screenCenterY}px Arial`,color:`#000`}).setOrigin(.5);
        this.add.text(screenCenterX, screenCenterY*1.3, 'Press left key to win. Press right key to lose.\nPress Down to Settings Press UP for gameplay', {
            font:`${.1*screenCenterY}px Arial`,color:`#000`
        }).setOrigin(.5);
        this.cameras.main.fadeIn(1000, 255,255,255);
        this.input.keyboard.on('keydown-RIGHT', () => {
            this.input.keyboard.removeAllListeners();
            this.cameras.main.fade(500, 0,0,0, true);
            this.time.delayedCall(500, () => this.scene.start('losescreen'));
        });
        this.input.keyboard.on('keydown-LEFT', () => {
            this.input.keyboard.removeAllListeners();
            this.cameras.main.fade(500, 0,0,0, true);
            this.time.delayedCall(500, () => this.scene.start('victoryscreen'));
        });
        this.input.keyboard.on('keydown-DOWN', () => {
            this.input.keyboard.removeAllListeners();
            this.cameras.main.fade(500, 0,0,0, true);
            this.time.delayedCall(500, () => this.scene.start('settings'));
        });
        this.input.keyboard.on('keydown-UP', () => {
            this.input.keyboard.removeAllListeners();
            this.cameras.main.fade(500, 0,0,0, true);
            this.time.delayedCall(500, () => this.scene.start('game'));
        });
    }
}

class VictoryScreen extends Phaser.Scene{
    constructor() {
        super("victoryscreen")
    }
    create(){
        let sCX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let sCY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.victory =  this.add.text(sCX, sCY*.25, 'Victory!',{font:`Bold ${.1667*sCY}px Arial`,color:`#ffdf40`,
            stroke: `#000`,strokeThickness:.0139*sCY}).setOrigin(.5,0);
        this.click_desc = this.add.text(sCX, sCY*1.5, `Tap anywhere to restart.`, {
            font:`${.1*sCY}px Arial`,color:`#000`}).setOrigin(.5,1).setAlpha(0);
        this.cameras.main.fadeIn(500, 0,0,0);
        this.time.delayedCall(1500, () => this.tweens.add({targets: this.click_desc, alpha: 1, duration: 1250}));

        this.input.on('pointerdown', () => {
            this.input.removeAllListeners();
            this.cameras.main.fade(1000, 255,255,255, true);
            this.time.delayedCall(1000, () => this.scene.start('gameplayscreen'));
        });
    }
}

class Settings extends Phaser.Scene{
    constructor() {
        super("settings")
    }
    create(){
        let sCX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let sCY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.victory =  this.add.text(sCX, sCY*.25, 'Settings!!',{font:`Bold ${.1667*sCY}px Arial`,color:`#ffdf40`,
            stroke: `#000`,strokeThickness:.0139*sCY}).setOrigin(.5,0);
        this.click_desc = this.add.text(sCX, sCY*1.5, `Tap anywhere to restart.`, {
            font:`${.1*sCY}px Arial`,color:`#000`}).setOrigin(.5,1).setAlpha(0);
        this.cameras.main.fadeIn(500, 0,0,0);
        this.time.delayedCall(1500, () => this.tweens.add({targets: this.click_desc, alpha: 1, duration: 1250}));

        this.input.on('pointerdown', () => {
            this.input.removeAllListeners();
            this.cameras.main.fade(1000, 255,255,255, true);
            this.time.delayedCall(1000, () => this.scene.start('gameplayscreen'));
        });
    }
}

class Game extends Phaser.Scene{
    constructor() {
        super("game")
    }
    create(){
        let sCX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let sCY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.victory =  this.add.text(sCX, sCY*.25, 'Gameplay(WOW)!!',{font:`Bold ${.1667*sCY}px Arial`,color:`#ffdf40`,
            stroke: `#000`,strokeThickness:.0139*sCY}).setOrigin(.5,0);
        this.click_desc = this.add.text(sCX, sCY*1.5, `Tap anywhere to restart.`, {
            font:`${.1*sCY}px Arial`,color:`#000`}).setOrigin(.5,1).setAlpha(0);
        this.cameras.main.fadeIn(500, 0,0,0);
        this.time.delayedCall(1500, () => this.tweens.add({targets: this.click_desc, alpha: 1, duration: 1250}));

        this.input.on('pointerdown', () => {
            this.input.removeAllListeners();
            this.cameras.main.fade(1000, 255,255,255, true);
            this.time.delayedCall(1000, () => this.scene.start('gameplayscreen'));
        });
    }
}





const game = new Phaser.Game({
    type: Phaser.WEBGL,
    width: 1280,
    height: 720,
    backgroundColor: 0xcccccc,
    physics: {
        default: 'arcade',
        arcade: {debug: true, gravity: {x:0, y:100}}
    },
    scene: [ GameplayScreen, VictoryScreen, LoseScreen, Settings, Game],
    title: "Roly Poly: To The End",
});