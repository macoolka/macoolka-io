import * as t from '../';
import { right,isLeft } from 'fp-ts/lib/Either';
describe('io', () => {
    it('withDefault', () => {
        const M = t.withDefault(t.string, '123');
        expect(M.decode(null)).toEqual(right('123'));
        expect(M.decode(null)).toEqual(right('123'));
        expect(M.decode('4')).toEqual(right('4'));

        const MA=t.type({
            name:t.string,
            names:t.array(t.string)
        })
   
        const MB=t.type({
            name:t.withDefault(t.string,'1'),
            names:t.withDefault(t.array(t.string),[])
        })
        expect(MB.decode({})).toEqual(right({name:'1',names:[]}));
        expect(MB.decode({name:'2'})).toEqual(right({name:'2',names:[]}));
        expect(MB.decode({names:['1']})).toEqual(right({name:'1',names:['1']}));
        expect(MB.decode({names:['3'],name:'3'})).toEqual(right({name:'3',names:['3']}));
        expect(isLeft(MA.decode({}))).toEqual(true);
     });
 
    it('dateFromNumber', () => {
        const d = new Date(2000, 1, 1);
        const millis = d.getTime();
        expect(t.dateFromNumber.decode(millis)).toEqual(right(d));
        expect(t.dateFromNumber.is(d)).toEqual(true);
        expect(t.dateFromNumber.encode(d)).toEqual(millis);
        expect(isLeft(t.dateFromNumber.decode(''))).toEqual(true);
    });
    it('dateFromNumber', () => {
        const d = new Date(2000, 1, 1);
        const millis = d.getTime()/1000;
        expect(t.dateFromUnixTime.decode(millis)).toEqual(right(d));
        expect(t.dateFromUnixTime.is(d)).toEqual(true);
        expect(t.dateFromUnixTime.encode(d)).toEqual(millis);
        expect(isLeft(t.dateFromUnixTime.decode(''))).toEqual(true);
    });
    it('dateFromISOString', () => {
        const d = new Date(2000, 1, 1);
        const s = d.toISOString();
        expect(t.dateFromISOString.decode(s)).toEqual(right(d));
        expect(t.dateFromISOString.is(d)).toEqual(true);
        expect(t.dateFromISOString.encode(d)).toEqual(s);
        expect(isLeft(t.dateFromNumber.decode(''))).toEqual(true);
    });
    it('StringMaxLength',()=>{
        expect(t.stringMaxLength(3).decode('123')).toEqual(right('123'))
        expect(isLeft(t.stringMaxLength(3).decode('1234'))).toEqual(true)
    })
    it('stringMinLength',()=>{
        expect(t.stringMinLength(3).decode('123')).toEqual(right('123'))
        expect(isLeft(t.stringMinLength(3).decode('12'))).toEqual(true)
    })
    it('StringMatch',()=>{
        expect(t.stringMatch(/^A/).decode('ABC')).toEqual(right('ABC'))
        expect(isLeft(t.stringMatch(/^A/).decode('12'))).toEqual(true)
    })
    it('email',()=>{
        expect(t.email.decode('a@mail.com')).toEqual(right('a@mail.com'))
        expect(isLeft(t.email.decode('12'))).toEqual(true)
    }) 
    it('ipv4',()=>{
        expect(t.ipv4.decode('8.8.8.8')).toEqual(right('8.8.8.8'))
        expect(isLeft(t.ipv4.decode('12'))).toEqual(true)
    })  
    it('ipv6',()=>{
        expect(t.ipv6.decode('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2')).toEqual(right('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2'))
        expect(isLeft(t.ipv6.decode('8.8.8.8'))).toEqual(true)
    })  
    it('url',()=>{
        expect(t.url.decode('http://bing.com')).toEqual(right('http://bing.com'))
        expect(isLeft(t.url.decode('8.8.8.8'))).toEqual(true)
    }) 
     it('UUID',()=>{
        expect(t.uuid.decode('00000000-0000-0000-0000-000000000000')).toEqual(right('00000000-0000-0000-0000-000000000000'))
        expect(isLeft(t.uuid.decode('12'))).toEqual(true)
    })
    it('NumberMaxValue',()=>{
        expect(t.numberMaxValue(3).decode(3)).toEqual(right(3))
        expect(isLeft(t.numberMaxValue(3).decode(4))).toEqual(true)
    })
    it('NumberMinValue',()=>{
        expect(t.numberMinValue(3).decode(3)).toEqual(right(3))
        expect(isLeft(t.numberMinValue(3).decode(2))).toEqual(true)
    })
    it('nonEmptyArray',()=>{
        expect(t.nonEmptyArray(t.int,'Array int').decode([1])).toEqual(right([1]))
      // const value= t.nonEmptyArray(t.int).decode([1])
        expect(t.nonEmptyArray(t.int).encode([1] as any)).toEqual([1])
        expect(t.nonEmptyArray(t.int).is([1])).toEqual(true)
     
        expect(isLeft(t.nonEmptyArray(t.int).decode([]))).toEqual(true)
        expect(isLeft(t.nonEmptyArray(t.int).decode(''))).toEqual(true)
    })
    it('nonEmptyString',()=>{
        expect(t.nonEmptyString.decode('1')).toEqual(right('1'))
        expect(t.nonEmptyString.is('1')).toEqual(true)
        expect(isLeft(t.nonEmptyString.decode(''))).toEqual(true)
    })
});
