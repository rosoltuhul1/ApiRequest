const express=require('express');
const app=express();


const courses=[
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'}
];
app.get('/',(req,res)=>{
    res.send('hello world!');
}
);

app.get('/api/courses',(req,res)=>{
    res.send(courses);
}
);

app.get('/api/courses/:id',(req,res)=>{
    let course=courses.find(c => c.id===parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given id was not found');//404
    res.send(course);
});


const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`listenning in port ${port}...`));