setwd("../../../../../public/data")
dataSet <- read.csv('100m.csv')
dashTimeSeries <- ts(dataSet, start=c(2009, 1), end=c(2016,9), frequency=1)
write.csv(dashTimeSeries, 'dash.csv')

returnDash <- function() {
   return(read.csv('dash.csv'))
}

returnDash()
