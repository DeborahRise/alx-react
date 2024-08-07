import React from "react";
import { getFooterCopy, getFullYear, getLatestNotification } from "../../../task_2/dashboards/src/utils";

describe('testing the functions in utils.js', () => {
    test('getFullYear returns current year', () => {
        const gFYear = new Date().getFullYear();
        expect(getFullYear()).toBe(gFYear);
    });
    test('getFooterCopy returns "Holberton School main dashboard" when false', () => {
        const when_false = 'Holberton School main dashboard';
        expect(getFooterCopy(false)).toBe(when_false)
    })
    test('getFooterCopy returns "Holberton School" when true', () => {
        const when_true = 'Holberton School';
        expect(getFooterCopy(true)).toBe(when_true);
      });
      test('getLatestNotification returns the right string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
      })
})