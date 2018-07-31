import moment from 'moment';
import { 
    setStartDate, 
    setEndDate, 
    sortByDate, 
    sortByAmount, 
    setTextFilter 
} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
 const action = setEndDate(moment(0));
 expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
 });
});

test('should generate sort by amount object', () => {
    const action = sortByAmount('amount');
    expect (action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
});

test('shoud generate sort by date object', () => {
    const action = sortByDate('date');
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
});

test('should generate set text filter object', () => {
    const action = setTextFilter('test1');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test1'
    });
});

test('should generate set text filter default object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});