import { BNode } from './BNode.js';

describe('class BNode for binary trees', () => {
  it('class BNode basic value', () => {
    expect.assertions(2);

    const testNodeA = new BNode(5);
    const testNodeB = new BNode(testNodeA);

    expect(testNodeA.getValue()).toStrictEqual(5);
    expect(testNodeB.getValue()).toStrictEqual(5);
  });

  it('class BNode left value', () => {
    expect.assertions(2);

    const valueA = 'A';
    const valueLeft = 'Z';

    const testNodeA = new BNode(valueA);
    testNodeA.setLeft(valueLeft);

    const testNodeB = new BNode('B');

    testNodeB.setLeft(testNodeA);

    expect(testNodeA.getLeft().getValue()).toStrictEqual(valueLeft);

    expect(testNodeB.getLeft().getValue()).toStrictEqual(valueA);
  });

  it('class BNode right value', () => {
    expect.assertions(2);

    const valueA = 'A';
    const valueRight = 'Z';

    const testNodeA = new BNode(valueA);
    testNodeA.setRight(valueRight);

    const testNodeB = new BNode('B');

    testNodeB.setRight(testNodeA);

    expect(testNodeA.getRight().getValue()).toStrictEqual(valueRight);

    expect(testNodeB.getRight().getValue()).toStrictEqual(valueA);
  });

  it('class BNode leaf condition', () => {
    expect.assertions(3);

    const valueA = 'A';

    const testNodeA = new BNode(valueA);

    const testNodeB = new BNode('B');
    const testNodeC = new BNode('C');

    testNodeA.setLeft(testNodeB);
    testNodeA.setRight(testNodeC);

    expect(testNodeA.isLeaft()).toStrictEqual(false);
    expect(testNodeB.isLeaft()).toStrictEqual(true);
    expect(testNodeB.isLeaft()).toStrictEqual(true);
  });
});
