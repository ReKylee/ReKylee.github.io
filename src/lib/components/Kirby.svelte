<div class="kirby">
    <div class="body">
        <div class="face">
            <div class="left-eye">
                <div class="pupil">
                    <div class="shine"></div>
                </div>
            </div>
            <div class="right-eye">
                <div class="pupil">
                    <div class="shine"></div>
                </div>
            </div>
            <div class="mouth">
                <div class="mouth-top"></div>
            </div>
            <div class="left-cheek"></div>
            <div class="right-cheek"></div>
        </div>
        <div class="right-arm"></div>
        <div class="left-arm">
            <div class="left-arm-top"></div>
        </div>
        <div class="left-leg"></div>
        <div class="right-leg"></div>
    </div>
</div>

<style>
    .kirby {
        margin: 2rem;
    }

    .body,
    .mouth-top,
    .right-arm,
    .left-arm-top {
        background-color: pink;
    }

    .body {
        width: 600px;
        height: 600px;
        border: 1em solid black;
        border-radius: 50%;
        position: relative;
        margin: auto;
    }

    .face {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 50%;
        top: -10%;
        transform: rotate(-15deg);
    }

    .left-eye,
    .right-eye {
        position: absolute;
        width: 10%;
        height: 30%;
        border: 0.5em solid black;
        border-radius: 50%;
        background-color: cornflowerblue;
    }

    .left-eye {
        left: 0%;
        top: 10%;
    }

    .right-eye {
        left: 20%;
        top: 10%;
    }

    .pupil {
        width: 100%;
        height: 80%;
        border-radius: 50%;
        position: absolute;
        background-color: black;
    }

    .shine {
        width: 75%;
        height: 60%;
        border-radius: 50%;
        position: absolute;
        top: 2%;
        left: 10%;
        background-color: white;
    }

    .mouth {
        width: 10%;
        height: 10%;
        border-radius: 50%;
        position: absolute;
        left: 11%;
        top: 40%;
        background-color: black;
    }

    .mouth-top {
        width: 100%;
        height: 90%;
        border-radius: 50%;
        position: absolute;
        top: -10%;
    }

    .left-cheek,
    .right-cheek {
        position: absolute;
        width: 15%;
        height: 8%;
        border-radius: 50%;
        background-color: salmon;
    }

    .left-cheek {
        top: 40%;
        left: -15%;
        transform: rotate(5deg);
    }

    .right-cheek {
        top: 40%;
        left: 30%;
        transform: rotate(-5deg);
    }

    .right-arm {
        width: 40%;
        height: 30%;
        border: 1em solid black;
        border-radius: 50%;
        position: absolute;
        left: 65%;
        top: 10%;
        transform: rotate(-40deg);
        z-index: -1;
    }

    .left-arm {
        width: 40%;
        height: 35%;
        border-radius: 50%;
        position: absolute;
        left: -15%;
        top: 35%;
        background-color: black;
        transform: rotate(-30deg);
    }

    .left-arm-top {
        width: 100%;
        height: 90%;
        border-radius: 50%;
        position: absolute;
        left: 5%;
        top: 5%;
    }

    .left-leg,
    .right-leg {
        background-color: palevioletred;
        border-radius: 50%;
        position: absolute;
        border: 1em solid black;
    }

    .left-leg {
        width: 35%;
        height: 50%;
        left: 20%;
        top: 55%;
        transform: rotate(40deg);
    }

    .right-leg {
        width: 35%;
        height: 50%;
        left: 40%;
        top: 70%;
        transform: rotate(30deg);
        z-index: -1;
    }
</style>
