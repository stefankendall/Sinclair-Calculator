package com.stefankendall.wendler531;

import android.content.Context;
import org.junit.Assert;
import org.junit.Test;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import static org.mockito.Mockito.*;

public class DateFormatFinderTest {
    @Test
    public void testGetDateFormat() throws Exception {
        Context context = mock(Context.class);
        DateFormatFinder dateFormatFinder = spy(new DateFormatFinder(context));
        doReturn(new SimpleDateFormat("MM/dd/yyyy")).when(dateFormatFinder).getFormatFromContext();
        Assert.assertEquals("MM/dd/yyyy", dateFormatFinder.getDateFormat());
    }

    @Test
    public void testGetStringFormatFromDateFormatMonthFirst() throws Exception {
        DateFormat format = new SimpleDateFormat("MM/dd/yyyy");
        DateFormatFinder dateFormatFinder = new DateFormatFinder(null);
        Assert.assertEquals("MM/dd/yyyy", dateFormatFinder.getStringFormatFromDateFormat(format));
    }

    @Test
    public void testGetStringFormatFromDateFormatDayFirst() throws Exception {
        DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        DateFormatFinder dateFormatFinder = new DateFormatFinder(null);
        Assert.assertEquals("dd/MM/yyyy", dateFormatFinder.getStringFormatFromDateFormat(format));
    }

    @Test
    public void testShortFormat() throws Exception {
        DateFormat format = new SimpleDateFormat("d/M/yy");
        DateFormatFinder dateFormatFinder = new DateFormatFinder(null);
        Assert.assertEquals("dd/MM/yyyy", dateFormatFinder.getStringFormatFromDateFormat(format));
    }
}
