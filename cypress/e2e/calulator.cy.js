// 사용자에게 가장 중요한 기능은 연산의 결과 임으로 연산의 결과가 보여주는 디스플레이에 연산 결과값이 잘 보여지는지 부터 테스트

// 중요한 시퀀스 (순서) 는 아는것에서 모르는걸로 점진적으로 다가가는것.

// - [ ] 2개의 숫자에 대해 덧셈이 가능하다.
// - [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
// - [ ] 2개의 숫자에 대해 곱셈이 가능하다.
// - [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
// - [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// - [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// - [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.

const clickDigitBtns = (digits = []) => {
  digits.forEach((_) => cy.get('.digit').contains(_).click());
};

describe('계산기 앱  테스트', () => {
  beforeEach('페이지 방문', () => {
    cy.visit('../../index.html');
  });

  it('페이지 접속', () => {});

  it('화면에 숫자 0이 기본표시 된다.', () => {
    // 돔에 접근하기위한
    cy.get('#total').should('have.text', 0);
    // 버그가 적기 위해서는 코드량이 적을때 자주 리팩토링 하는것
  });

  // 리팩터링이 끝났다면 다음 테스트케이스

  it('1개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다.', () => {
    clickDigitBtns(['1']);
    cy.get('#total').should('have.text', 1);
  });

  it('2개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다.', () => {
    clickDigitBtns(['1', '2']);

    cy.get('#total').should('have.text', 12);
  });

  it('3개의 숫자버튼을 클릭하면 display에 숫자가 표현된다', () => {
    clickDigitBtns(['1', '2', '3']);
    cy.get('#total').should('have.text', 123);
  });
});
