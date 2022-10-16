import photo from './gb1.jpg';

const Card = () => {
    return (
        <div class='card'>
            <div class='card-top'>
                <h1>Card</h1>
            </div>
            <div class='card-body'>
                <img src={photo}></img>
            </div>
            <div>
                <p> Keterangan dalam card komponen </p>
            </div>
        </div>
    );
};

export default Card;