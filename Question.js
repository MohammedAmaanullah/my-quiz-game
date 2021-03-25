class Question{
    constructor(){
        this.title = createElement("h1");
        this.input1 = createInput("enter your name");
        this.input2 = createInput("Enter Correct Option Number");
        this.button = createButton("submit");
        this.question = createElement("h3");
        this.option1 = createElement("h4");
        this.option2 = createElement("h4");
        this.option3 = createElement("h4");
        this.option4 = createElement("h4");
    }

    Hide(){
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        this.title.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);
        
        this.question.html("What is the largest country in the world");
        this.question.position(150,80);

        this.option1.html("United States")
        this.option1.position(150,100);

        this.option2.html("Russia");
        this.option2.position(150,120);

        this.option3.html("Canada")
        this.option3.position(150,140);

        this.option4.html("India");
        this.option4.position(150,160);

        this.input1.position(150,230);
        this.input2.position(350, 230);
        this.button.position(290,300);

        this.button.mousePressed(()=>{
            this.button.hide();
            
        })
    }
}