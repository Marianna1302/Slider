var data = [
    'image/slide-1.png', 
    'image/slide-2.png', 
    'image/slide-3.png',
    'image/slide-4.png',
    'image/slide-5.png',
]

function Slider (images, id, defaultIndex = 0) {
    this.index = defaultIndex;
    this.length = images.length;
    
    this.slideRight = function () {
        this.index++;
        if (this.index > this.length-1) {
            this.index = 0;
        }
        this.img.src = images[this.index];
     
    }.bind(this);

    this.slideLeft = function () {
        this.index--;
        if (this.index < 0) {
            this.index = this.length-1;
        }
        this.img.src = images[this.index];
     
    }.bind(this);

    this.init = function () {
        //git element by id
        this.container = document.querySelector(id);
        //create html objects
        this.wrap = document.createElement('div');
        this.img = document.createElement('img');
        this.btnRight = document.createElement('i');
        this.btnLeft = document.createElement('i');
        //set events for buttons
        this.btnRight.onclick = this.slideRight;
        this.btnLeft.onclick = this.slideLeft;
        //set default image
        this.img.src = images[this.index];
    }

    this.render = function () {
        this.wrap.className = 'slider';
        this.btnLeft.innerHTML = '<';
        this.btnRight.innerHTML = '>';
        this.wrap.appendChild(this.btnLeft);
        this.wrap.appendChild(this.img);
        this.wrap.appendChild(this.btnRight);

        this.container.appendChild(this.wrap);
    }

    this.init();
    this.render();
}

var slider = new Slider(data, '#slider', 4);


