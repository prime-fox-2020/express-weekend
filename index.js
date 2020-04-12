const express = require(`express`)
const app = express()
const port = 3000
const fs = require('fs')

app.set(`view engine`,`ejs`)

app.get(`/`,(req,res)=>{

    res.send(`Sekolah SMA Hacktiv8 merupakan sekolah berbasis IT, Dengan pengajar yang sangat unggul di bidangnya <br>
    Sekolah Hacktiv8 terletak di jakarta selatan, sangat strategis dan sangat mudah di akses.
    <br><br>

    1)Visi Sekolah ”Menciptakan kualitas insan berprestasi, berbudaya dan bertaqwa serta paham technology” <br><br>

    2) Misi Sekolah<br>
    &ensp;&ensp;    a. Melaksanakan pembelajaran aktif, kreatif, efektif dan menyenangkan untuk mengembangkan potensi keilmuan peserta didik. <br>
    &ensp;&ensp;    b.  Menumbuhkan semangat berprestasi kepada seluruh warga sekolah. <br>
    &ensp;&ensp;    c.  Membimbing dan mengembangkan bakat dan minat peserta didik. <br>
    &ensp;&ensp;    d.  Terlaksananya program ekstrakurikuler untuk menghasilkan siswa yang berprestasi dan bermanfaat bagi kehidupan sehari-hari. <br>
    &ensp;&ensp;    e.  Mengembangkan hasil karya yang dimiliki peserta didik. <br>
    &ensp;&ensp;    f. Meningkatkan kesadaran untuk memelihara lingkungan. <br><br>

    3)Tujuan Pendidikan di SMA IT Hackti8 <br>
    a. Tujuan Umum <br>
    Meletakkan dasar kecerdasan, pengetahuan, kepribadian, akhlak mulia, serta keterampilan untuk hidup mandiri dan mengikuti pendidikan lebih lanjut. <br>
    b.  Tujuan Khusus <br>
    &ensp;&ensp;    a) Meningkatkan perilaku peserta didik yang berakhlak mulia, beriman menuju ketaqwaan terhadap Allah Swt. <br>
    &ensp;&ensp;    b) Meningkatkan prestasi lulusan peserta didik yang siap mengikuti pendidikan lebih lanjut. <br>
    &ensp;&ensp;    c) Meraih prestasi dalam berbagai ajang lomba/seleksi pada tingkat kecamatan, kabupaten dan propinsi. <br>
    &ensp;&ensp;   d) Meningkatkan keterampilan karya peserta didik.<br>
    &ensp;&ensp;   e)  Meningkatkan kepedulian terhadap lingkungan sekolah.
    `)
})

app.get(`/teachers`,(req,res)=>{

    let dataTheachers = fs.readFileSync(`./teachers.json`,`utf8`)
    dataTheachers = JSON.parse(dataTheachers)
    let text ='';

    for (let i = 0; i < dataTheachers.length; i++) {
        text +=`<tr>
        <td>${dataTheachers[i].Id}</td>
        <td>${dataTheachers[i].first_name}</td>
        <td>${dataTheachers[i].first_name}</td>
        <td>${dataTheachers[i].last_name}</td>
        <td>${dataTheachers[i].email}</td>
        <td>${dataTheachers[i].gender}</td>
    </tr>`
    }

    res.send(`<table border="2">
    <caption>Data Guru Sekolah SMA Hacktiv8 </caption>
    <tr>
        <td rowspan="2">Id</td>
        <td rowspan="2">Nama</td>
        <td colspan="4" align="center">Data Lengkap</td>
    </tr>
    <tr>
        <td>first_name</td>
        <td>last_name</td>
        <td>email</td>
        <td>gender</td>
    </tr>
    ${text}
</table>`)
})

app.get(`/students`,(req,res)=>{

    let dataStudents= fs.readFileSync(`./student.json`,`utf8`)
    dataStudents = JSON.parse(dataStudents)
    let text ='';

    for (let i = 0; i < dataStudents.length; i++) {
        text +=`<tr>
        <td>${dataStudents[i].Id}</td>
        <td>${dataStudents[i].first_name}</td>
        <td>${dataStudents[i].first_name}</td>
        <td>${dataStudents[i].last_name}</td>
        <td>${dataStudents[i].email}</td>
        <td>${dataStudents[i].gender}</td>
        <td>${dataStudents[i].birt_date}</td>
    </tr>`
    }

    res.send(`<table border="2">
    <caption>Data Murid Sekolah SMA Hacktiv8 </caption>
    <tr>
        <td rowspan="2">Id</td>
        <td rowspan="2">Nama Panggilan</td>
        <td colspan="5" align="center">Data Lengkap</td>
    </tr>
    <tr>
        <td>first_name</td>
        <td>last_name</td>
        <td>email</td>
        <td>gender</td>
        <td>birt_date</td>
    </tr>
    ${text}
</table>`)
})

app.get(`/subjects`,(req,res)=>{
    
    let dataSubjects= fs.readFileSync(`./subjects.json`,`utf8`)
    dataSubjects = JSON.parse(dataSubjects)
    let text ='';

    for (let i = 0; i < dataSubjects.length; i++) {
        text +=`<tr>
        <td>${dataSubjects[i].Id}</td>
        <td>${dataSubjects[i].subject_name}</td>
    </tr>`
    }

    res.send(`
    <p>Subjects Sekolah SMA Hacktiv8 </p>
    <table border="2">
    
    <tr>
        <td>id</td>
        <td>subject_name</td>
    </tr>
    ${text}
</table>`)
})

app.listen(port, ()=>{

    console.log(`tes runing whith port : ${port}`)
})