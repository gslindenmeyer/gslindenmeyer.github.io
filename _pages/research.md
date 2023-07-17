---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

### Using boosting for forecasting electric energy consumption during a recession: a case study for the Brazilian State Rio Grande do Sul

[Link to paper](https://link.springer.com/article/10.1007/s12076-021-00268-3)
<br/>
<ins>Abstract</ins>: This paper seeks to test the component-wise boosting validity as an instrument of forecasting regional series in economic recessions. We use 822 predictors to forecast the monthly electricity consumption of the Brazilian state Rio Grande do Sul. The time series has 190 observations and occurs during the 2015 political and economic crisis of Brazil, the biggest economic crisis in the country’s history until then, which significantly impacted the electricity consumption behavior. Using 12 lags of the predictors, boosting manages to select predictors associated with the crisis and is capable of understanding better the trend change compared to a standard seasonal autoregressive integrated moving average (SARIMA) benchmark. We found three selected predictor clusters: lags of Y, which model the seasonality of the series, the lagged electricity consumption around Brazil, which serve to update the model the recent changes in the electricity consumption, and the unemployment rates, which are directly related to the crisis. We conclude the paper bringing two alternative exercises, using k-fold in the place of AICc and also executing a quantile-boosting exercise. By filtering a high-dimensional data set, the machine learning algorithm appears as a useful instrument when forecasting short regional series within recessions.

## Work in Progress
### Boosting and predictability of macroeconomic variables : evidence from Brazil
[Link to paper](https://www.lume.ufrgs.br/handle/10183/239834)
<br/>
<ins>Abstract</ins>:   This paper aims to elaborate a treated data set and apply the boosting methodology to monthly Brazilian macroeconomic variables to check its predictability. The forecasting performed here consists in using linear and nonlinear base-learners, as well as a third type of model that has both linear and nonlinear components in the estimation of the variables using the history itself with lag up to 12 periods. The results obtained here through different evaluation approaches point out that, on average, the performance of boosting models using P-Splines as base-learner are the ones that have the best results, especially the methodology with two components: two-stage boosting. Finally, we perform alternative methods to check the robustness of the results.