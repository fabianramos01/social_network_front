import moment from "moment/moment";

export const cleanJSON = (object = {}) => {
    let newObject = {};

    Object.keys(object).forEach(key => {
        const value = object[key];

        if (key === 'undefined') return;
        if (typeof value !== 'boolean' && !value) return;

        newObject = { ...newObject, [key]: object[key] };
    });

    return newObject;
};

export const isEmptyObject = (obj = {}) => Object.keys(obj).length === 0;

export const formatISODate = (date = '') => moment(date).format("dddd, MMM DD - hh:mm a");
