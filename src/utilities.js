//Define our labelmap
const labelMap = {
    1:{name: 'Thank You', color: 'cadetblue'},
    2:{name: 'Hello', color: 'cyan'},
    3:{name: 'Nice', color: 'lime'},
    4:{name: 'Name', color: 'lightcoral'},
    5:{name: 'Help', color: 'purple'},
    6:{name: 'Yes', color: 'magenta'},
    7:{name: 'I Love You', color: 'green'},

}


//Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            //Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]

            //Set Styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'

            //Draw
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5)
            ctx.stroke()

        }
    }
}