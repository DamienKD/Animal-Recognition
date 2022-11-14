function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TuvtbqDm1/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
    } else {
            console.log(results);
            random_number_r = Math.floor(Math.random() * 255) + 1;
            random_number_g = Math.floor(Math.random() * 255) + 1;
            random_number_b = Math.floor(Math.random() * 255) + 1;

            document.getElementById("result_label").innerHTML = 'I can hear - '+
            results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
            (results[0].confidence*100).toFixed(2)+" %";
            document.getElementById("result_label").style.color = "rgb("
            +random_number_r+","+random_number_g+","+random_number_r+")";
            document.getElementById("result_confidence").style.color = "rgb("
            +random_number_r+","+random_number_g+","+random_number_r+")";


            img = document.getElementById('noise1');
            img1 = document.getElementById('dog2');
            img2 = document.getElementById('cat3');
            img3 = document.getElementById('cow4');
            img3 = document.getElementById('roar5');

            if (results[0].label == "Bark") {
                img.src = 'dog.gif';
                img1.src = 'cat.jpeg';
                img2.src = 'cow.jpeg';
                img3.src = 'roar.jpeg';
            } else if (results[0].label == "Meow") {
                img.src = 'dog.jpeg';
                img1.src = 'cat.gif';
                img2.src = 'cow.jpeg';
                img3.src = 'roar.jpeg';
            } else if (results[0].label == "Moo") {
                img.src = 'dog.jpeg';
                img1.src = 'cat.jpeg';
                img2.src = 'cow.gif';
                img3.src = 'roar.jpeg';
            } else if (results[0].label == "Roar") {
                img.src = 'dog.jpeg';
                img1.src = 'cat.jpeg';
                img2.src = 'cow.jpeg';
                img3.src = 'roar.gif';
            }
        }
    }
