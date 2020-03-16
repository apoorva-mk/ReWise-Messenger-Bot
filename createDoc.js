var fs = require('fs');
const PDFDocument=require('pdfkit');
const doc = new PDFDocument;
module.exports.createDoc = createDoc;

function createDoc(questions, answers){
    console.log(questions, answers);
    var d = new Date();
    console.log(d);
    //creating questions document
    var doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('Questions.pdf'));
    
    // draw some text
    doc.fontSize(25).text('Rewise Quiz - Questions', 100, 80);
    doc.moveDown();
    doc
      .font("Times-Roman", 15)
      .text('Name: ')
      .moveDown();

    doc
      .font("Times-Roman", 15)
      .text('Roll No: ')
      .moveDown();

    date = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
    console.log(date, typeof(date));
    doc
      .font("Times-Roman", 15)
      .text('Date: '+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear())
      .moveDown();

    doc
      .font("Times-Roman",17)
      .text('Answer the following questions in the space given below')
      .moveDown()

    var i;
    for (i = 0; i < questions.length; i++) {
        doc
        .font('Times-Roman', 13)
        .text("Question "+(i+1)+": "+questions[i])
        .moveDown()
        .moveDown()

        doc.lineWidth(1);
        doc.lineJoin('round')
        .rect(100, 330+i*74, 400, 1)
        .stroke();
        doc.moveDown();
        doc.moveDown();
    }
    doc.lineWidth(0.5);
    doc.end();

    //creating answer key  document
    var doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('Answers.pdf'));
    
    // draw some text
    doc.fontSize(25).text('Rewise Quiz - Answer Key', 100, 80);
    doc.moveDown();
    for (i = 0; i < answers.length; i++) {
        doc
        .font('Times-Roman', 13)
        .text("Answer "+(i+1)+": "+answers[i])
        .moveDown()
        .moveDown()
    }
    doc.end();
}


module.exports.createDoc = createDoc;