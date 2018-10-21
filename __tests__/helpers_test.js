// import React from 'react';
// import {
//   renderIntoDocument,
//   findRenderedDOMComponentWithClass,
//   findRenderedDOMComponentWithTag,
//   Simulate
// } from 'react-addons-test-utils';
import { expect } from 'chai';
import { generateKey, makeArray } from '../src/helpers';

describe('Helpers', function () {
  it('should generate a key', function () {
    expect(generateKey(1)).to.equal(1);
    expect(generateKey(1, 2)).to.equal('2-1');
  });

  it('should make an array out of objects', function () {
    const arr = [];
    const obj = {};
    expect(makeArray(arr)).to.equal(arr);
    expect(obj).to.equal(makeArray(obj)[0]);
  });
});
