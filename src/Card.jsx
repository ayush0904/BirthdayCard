import imageSrc from './images/thanos.jpg';
export default () => (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY Thanuuuuu!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">Happyyy Birthday my Choatuuuuu!!!!!!</h3>
        <p>My Cutieee Pieeeee,</p>
        <p>
         Happy Birthdayyy my baby.. May this year will be your besttt year...
         I loveeeeeeeee youuuuuuuuuuu soooooo mucccchhhhhhh.......
         <img src={imageSrc} alt="Example Image" style={{ width: '100px', height: 'auto' }} />
        </p>
       
       
      </div>
    </div>
  );
  