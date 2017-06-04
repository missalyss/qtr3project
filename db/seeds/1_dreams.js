
exports.seed = function(knex, Promise) {
  return knex('dreams').del()
    .then(function () {
      return knex('dreams').insert([
        {id: 1, dream_date: '5-29-17', body: 'Sophie, my partner\'s daughter, was missing. Donald Trump had taken her under some legal pretense, like he had some custody over her. And I was not going to allow that to happen, legal or not. He would be getting her near an underground subway station and I had to get there to either take her from him or get her before he got her. It was really difficult to get there and I kept getting confused and lost.'},
        {id: 2, dream_date: '6-1-17', body: 'I was outside a shop with my childhood friend, Sarah, when Kermit the Frog was on his way in. He was smoking, but it was common knowledge that Kermit was a smoker. We got excited and he let us take pictures with him. Then he and I started doing shuffle-off-the-buffalo and we were perfectly in sinc. I was star struck. We danced all the way into a culdasac where we fell into the driveway and I rolled into some wet dog shit, which was kind of annoying.'},
        {id: 3, dream_date: '6-2-17', body: 'My brother, Emerson, was single and had been interested in a girl for a while. She was Elle Fanning, but wasn\'t a famous actress. My other brother, Spencer, asked me to go with him to pick her up so she and Emerson could go on a date. When we got to her house, she was really excited, but then it turned out Spencer had lied to us; Emerson and she were never supposed to go on a date. I was so mad at Spencer because he had got her hopes up and had pulled me along and didn\'t care about inconveniencing either of us. I was so angry that I hit him, and even then he didn\'t care. It deeply bothered me that he didn\'t care about any of it.'},
      ]);
    }).then(function () {
      return knex.raw(
        "SELECT setval('dreams_id_seq', (SELECT MAX (id) FROM dreams))"
      )
    }).catch(function (error) {
      console.error("Red Alert! ", error);
    })
};