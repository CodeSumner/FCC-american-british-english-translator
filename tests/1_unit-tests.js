const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {

  suite('American to British English', () => {

    test('Translate Mangoes are my favorite fruit. to British English', () => {
      const translatedText = translator.toBritishEnglish('Mangoes are my favorite fruit.')[0];
      assert.equal(translatedText, 'Mangoes are my favourite fruit.');
    });

    test('Translate I ate yogurt for breakfast. to British English', () => {
      const translatedText = translator.toBritishEnglish('I ate yogurt for breakfast.')[0];
      assert.equal(translatedText, 'I ate yoghurt for breakfast.');
    });

    test("Translate We had a party at my friend's condo. to British English", () => {
      const translatedText = translator.toBritishEnglish("We had a party at my friend's condo.")[0];
      assert.equal(translatedText, "We had a party at my friend's flat.");
    });

    test("Translate Can you toss this in the trashcan for me? to British English", () => {
      const translatedText = translator.toBritishEnglish("Can you toss this in the trashcan for me?")[0];
      assert.equal(translatedText, "Can you toss this in the bin for me?");
    });

    test("Translate The parking lot was full. to British English", () => {
      const translatedText = translator.toBritishEnglish("The parking lot was full.")[0];
      assert.equal(translatedText, "The car park was full.");
    });

    test( "Translate Like a high tech Rube Goldberg machine. to British English", () => {
      const translatedText = translator.toBritishEnglish("Like a high tech Rube Goldberg machine.")[0];
      assert.equal(translatedText, "Like a high tech Heath Robinson device.");
    });

    test("Translate To play hooky means to skip class or work. to British English", () => {
      const translatedText = translator.toBritishEnglish("To play hooky means to skip class or work.")[0];
      assert.equal(translatedText, "To bunk off means to skip class or work.");
    });

    test("Translate No Mr. Bond, I expect you to die. to British English", () => {
      const translatedText = translator.toBritishEnglish("No Mr. Bond, I expect you to die.")[0];
      assert.equal(translatedText, "No Mr Bond, I expect you to die.");
    });

    test("Translate Dr. Grosh will see you now. to British English", () => {
      const translatedText = translator.toBritishEnglish("Dr. Grosh will see you now.")[0];
      assert.equal(translatedText, "Dr Grosh will see you now.");
    });

    test("Translate Lunch is at 12:15 today. to British English", () => {
      const translatedText = translator.toBritishEnglish("Lunch is at 12:15 today.")[0];
      assert.equal(translatedText, "Lunch is at 12.15 today.");
    });
  });

  suite('British to American English', () => {

    test("Translate We watched the footie match for a while. to American English", () => {
      const translatedText = translator.toAmericanEnglish("We watched the footie match for a while.")[0];
      assert.equal(translatedText, "We watched the soccer match for a while.");
    });

    test("Translate Paracetamol takes up to an hour to work. to American English", () => {
      const translatedText = translator.toAmericanEnglish("Paracetamol takes up to an hour to work.")[0];
      assert.equal(translatedText, "Tylenol takes up to an hour to work.");
    });

    test("Translate First, caramelise the onions. to American English", () => {
      const translatedText = translator.toAmericanEnglish("First, caramelise the onions.")[0];
      assert.equal(translatedText, "First, caramelize the onions.");
    });

    test("Translate I spent the bank holiday at the funfair. to American English", () => {
      const translatedText = translator.toAmericanEnglish("I spent the bank holiday at the funfair.")[0];
      assert.equal(translatedText, "I spent the public holiday at the carnival.");
    });

    test("Translate I had a bicky then went to the chippy. to American English", () => {
      const translatedText = translator.toAmericanEnglish("I had a bicky then went to the chippy.")[0];
      assert.equal(translatedText, "I had a cookie then went to the fish-and-chip shop.");
    });

    test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
      const translatedText = translator.toAmericanEnglish("I've just got bits and bobs in my bum bag.")[0];
      assert.equal(translatedText, "I've just got odds and ends in my fanny pack.");
    });

    test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
      const translatedText = translator.toAmericanEnglish("The car boot sale at Boxted Airfield was called off.")[0];
      assert.equal(translatedText, "The swap meet at Boxted Airfield was called off.");
    });

    test("Translate Have you met Mrs Kalyani? to American English", () => {
      const translatedText = translator.toAmericanEnglish("Have you met Mrs Kalyani?")[0];
      assert.equal(translatedText, "Have you met Mrs. Kalyani?");
    });

    test("Translate Prof Joyner of King's College, London. to American English", () => {
      const translatedText = translator.toAmericanEnglish("Prof Joyner of King's College, London.")[0];
      assert.equal(translatedText, "Prof. Joyner of King's College, London.");
    });

    test("Translate Tea time is usually around 4 or 4.30. to American English", () => {
      const translatedText = translator.toAmericanEnglish
      ("Tea time is usually around 4 or 4.30.")[0];
      assert.equal(translatedText, "Tea time is usually around 4 or 4:30.");
    });
  })

  suite("Highlight translation", () => {

    test("Highlight translation in Mangoes are my favorite fruit.", () => {
      const translatedText = translator.toBritishEnglish("Mangoes are my favorite fruit.")[1];
      assert.equal(translatedText, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.");
    });

    test("Highlight translation in I ate yogurt for breakfast.", () => {
      const translatedText = translator.toBritishEnglish("I ate yogurt for breakfast.")[1];
      assert.equal(translatedText, "I ate <span class=\"highlight\">yoghurt</span> for breakfast.");
    });

    test("Highlight translation in We watched the footie match for a while.", () => {
      const translatedText = translator.toAmericanEnglish("We watched the footie match for a while.")[1];
      assert.equal(translatedText, "We watched the <span class=\"highlight\">soccer</span> match for a while.");
    });

    test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
      const translatedText = translator.toAmericanEnglish("Paracetamol takes up to an hour to work.")[1];
      assert.equal(translatedText, "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.");
    });
  })
});
