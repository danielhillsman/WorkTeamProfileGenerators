const generateManagerCard = (manger) => {
    return `

        <div class='card text-white bg-danger'>
         <h3>${manger.getName()}</h3>
            <p><i class='fa-solid fa-mug-hot'></i>${manger.getRole()}</p>
             <div class='card-body'>
                <ul class='list-group list-group-flush'>
                <li class='list-group-item'>ID: ${manger.getId()}</li>
                <li class='list-group-item'>E-mail: <a href='mailto:${manger.getEmail()}'>${manger.getEmail()}</a>
                </li>
                <li class='list-group-item'>Office Number: ${manger.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
`;
};

const generateEngineerCard = (engineer) => {
    return `

        <div class='card text-white bg-primary'>
         <h3>${engineer.getName()}</h3>
            <p><i class="fa-solid fa-glasses"></i>${engineer.getRole()}</p>
             <div class='card-body'>
                <ul class='list-group list-group-flush'>
                <li class='list-group-item'>ID: ${engineer.getId()}</li>
                <li class='list-group-item'>E-mail: <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a>
                </li>
                <li class='list-group-item'>Office Number: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
`;
};
const generateInternCard = (intern) => {
    return `

        <div class='card text-white bg-info'>
         <h3>${intern.getName()}</h3>
            <p><i class="fa-solid fa-user-graduate"></i>${intern.getRole()}</p>
             <div class='card-body'>
                <ul class='list-group list-group-flush'>
                <li class='list-group-item'>ID: ${intern.getId()}</li>
                <li class='list-group-item'>E-mail: <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a>
                </li>
                <li class='list-group-item'>Office Number: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
`;
};

const baseHtml = (htmlArr) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/acfb8fb9e5.js" crossorigin="anonymous"></script>
    <title>Our Team Profiles</title>

    <style>
    .card-deck{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        margin: 5rem;
    }
    .card{
        margin: 5rem;
        
    }
</style>

</head>
<body>
<header>
<div class='jumbotron-fluid'>
    <h1 class='display-4 heading'>My Team</h1>
</div>
</header>
<div id='container'>
<div class='card-deck'>
    ${htmlArr.join(' ')}

</div>
</div>

</body>
</html>
`

module.exports = {
    generateEngineerCard,
    generateInternCard,
    generateManagerCard,
    baseHtml
}