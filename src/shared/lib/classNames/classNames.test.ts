import { classNames } from './classNames';


describe('classNames',
  function () 
  {

    test('с одним первым параметром',
      function ()
      {
        expect(classNames('someClass')).toBe('someClass');
      }
    );

    test('добавляем третий параметр',
      function ()
      {
        const expected = 'someClass additionClass1 additionClass2';
        expect(classNames('someClass', {}, ['additionClass1', 'additionClass2'])).toBe(expected);
      }
    );

    test('добавляем второй и третий параметры',
      function ()
      {
        const expected = 'someClass additionClass1 additionClass2 hovered scrollable';
        expect(
          classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['additionClass1', 'additionClass2']
          )).toBe(expected);
      }
    );

    test('второй параметр со значением false',
      function ()
      {
        const expected = 'someClass additionClass1 additionClass2 hovered';
        expect(
          classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['additionClass1', 'additionClass2']
          )).toBe(expected);
      }
    );

    test('второй параметр со значением undefined',
      function ()
      {
        const expected = 'someClass additionClass1 additionClass2 hovered';
        expect(
          classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['additionClass1', 'additionClass2']
          )).toBe(expected);
      }
    );

  }
);