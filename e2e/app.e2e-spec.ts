import {browser, by, element} from "protractor";
/**
 * Created by denis on 5/16/2017.
 */

describe('City_Guide E2E Tests', function () {

  let expectedMsg = 'Welcome to the City-Guide!';
  // beforeEach run before every test
  beforeEach(function () {
    browser.get("http://localhost:3000/dashboard");
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.id('welcomeMessage')).getText()).toEqual(expectedMsg);
  });

});


describe("test for input field on home page", function () {
  beforeEach(function (){
    browser.get("http://localhost:3000/dashboard");
  });

  it("should be on a correct page", function () {
    expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/dashboard");
  });

  it("should have a title", function () {
    expect(element(by.id('nazivGrada')).isPresent());
  });

  it("should have a text field on first page", function () {
    expect(browser.getTitle()).toEqual("City-Guide");
  });

  it('testing input and output', function () {
    element(by.model("city.name")).sendKeys("Sarajevo");
    element(by.buttonText("DETALJI")).click();
    expect(browser.getCurrentUrl()).toContain("sarajevo");
  });

});


describe('test for inner connections', function () {

  beforeEach(function (){
    browser.get("http://localhost:3000/dashboard");
  });

  it('clicking on Cities jumps to cities page', function () {
    element(by.id('ChoiceCity')).click();
    expect(browser.getCurrentUrl()).toContain('cities');
  });

  it('testing inner connections', function () {
    element(by.buttonText('SMJESTAJ')).click();
    expect(browser.getCurrentUrl()).toContain('smjestaji');
  });

  it('testing inner connections', function () {
    element(by.model('city.name')).sendKeys("Sarajevo");
    element(by.buttonText('DETALJI')).click();
    element(by.buttonText('Znamenitosti'))
    expect(browser.getCurrentUrl()).toContain('sarajevo/znamenitosti');
  });

});

