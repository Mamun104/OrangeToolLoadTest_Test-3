/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 516.0, "minX": 0.0, "maxY": 28663.0, "series": [{"data": [[0.0, 516.0], [0.1, 518.0], [0.2, 519.0], [0.3, 520.0], [0.4, 521.0], [0.5, 521.0], [0.6, 521.0], [0.7, 522.0], [0.8, 522.0], [0.9, 522.0], [1.0, 523.0], [1.1, 523.0], [1.2, 523.0], [1.3, 524.0], [1.4, 524.0], [1.5, 524.0], [1.6, 524.0], [1.7, 524.0], [1.8, 525.0], [1.9, 525.0], [2.0, 525.0], [2.1, 525.0], [2.2, 526.0], [2.3, 526.0], [2.4, 526.0], [2.5, 526.0], [2.6, 527.0], [2.7, 527.0], [2.8, 527.0], [2.9, 527.0], [3.0, 527.0], [3.1, 527.0], [3.2, 527.0], [3.3, 527.0], [3.4, 528.0], [3.5, 528.0], [3.6, 528.0], [3.7, 528.0], [3.8, 528.0], [3.9, 528.0], [4.0, 529.0], [4.1, 529.0], [4.2, 529.0], [4.3, 529.0], [4.4, 529.0], [4.5, 529.0], [4.6, 529.0], [4.7, 529.0], [4.8, 529.0], [4.9, 529.0], [5.0, 530.0], [5.1, 530.0], [5.2, 530.0], [5.3, 530.0], [5.4, 530.0], [5.5, 530.0], [5.6, 530.0], [5.7, 530.0], [5.8, 530.0], [5.9, 530.0], [6.0, 531.0], [6.1, 531.0], [6.2, 531.0], [6.3, 531.0], [6.4, 531.0], [6.5, 531.0], [6.6, 531.0], [6.7, 531.0], [6.8, 531.0], [6.9, 532.0], [7.0, 532.0], [7.1, 532.0], [7.2, 532.0], [7.3, 532.0], [7.4, 532.0], [7.5, 532.0], [7.6, 532.0], [7.7, 532.0], [7.8, 533.0], [7.9, 533.0], [8.0, 533.0], [8.1, 533.0], [8.2, 533.0], [8.3, 533.0], [8.4, 533.0], [8.5, 533.0], [8.6, 534.0], [8.7, 534.0], [8.8, 534.0], [8.9, 534.0], [9.0, 534.0], [9.1, 534.0], [9.2, 534.0], [9.3, 535.0], [9.4, 535.0], [9.5, 535.0], [9.6, 535.0], [9.7, 535.0], [9.8, 535.0], [9.9, 535.0], [10.0, 536.0], [10.1, 536.0], [10.2, 536.0], [10.3, 536.0], [10.4, 536.0], [10.5, 536.0], [10.6, 536.0], [10.7, 536.0], [10.8, 537.0], [10.9, 537.0], [11.0, 537.0], [11.1, 537.0], [11.2, 537.0], [11.3, 537.0], [11.4, 537.0], [11.5, 537.0], [11.6, 538.0], [11.7, 538.0], [11.8, 538.0], [11.9, 538.0], [12.0, 538.0], [12.1, 538.0], [12.2, 538.0], [12.3, 539.0], [12.4, 539.0], [12.5, 539.0], [12.6, 539.0], [12.7, 539.0], [12.8, 539.0], [12.9, 539.0], [13.0, 539.0], [13.1, 540.0], [13.2, 540.0], [13.3, 540.0], [13.4, 540.0], [13.5, 540.0], [13.6, 540.0], [13.7, 540.0], [13.8, 541.0], [13.9, 541.0], [14.0, 541.0], [14.1, 541.0], [14.2, 541.0], [14.3, 541.0], [14.4, 542.0], [14.5, 542.0], [14.6, 542.0], [14.7, 542.0], [14.8, 543.0], [14.9, 543.0], [15.0, 543.0], [15.1, 543.0], [15.2, 543.0], [15.3, 543.0], [15.4, 544.0], [15.5, 544.0], [15.6, 544.0], [15.7, 544.0], [15.8, 544.0], [15.9, 545.0], [16.0, 545.0], [16.1, 545.0], [16.2, 545.0], [16.3, 545.0], [16.4, 545.0], [16.5, 545.0], [16.6, 546.0], [16.7, 546.0], [16.8, 546.0], [16.9, 546.0], [17.0, 546.0], [17.1, 547.0], [17.2, 547.0], [17.3, 547.0], [17.4, 547.0], [17.5, 548.0], [17.6, 548.0], [17.7, 548.0], [17.8, 548.0], [17.9, 548.0], [18.0, 548.0], [18.1, 548.0], [18.2, 548.0], [18.3, 549.0], [18.4, 549.0], [18.5, 549.0], [18.6, 549.0], [18.7, 550.0], [18.8, 550.0], [18.9, 550.0], [19.0, 550.0], [19.1, 550.0], [19.2, 550.0], [19.3, 551.0], [19.4, 551.0], [19.5, 551.0], [19.6, 551.0], [19.7, 551.0], [19.8, 552.0], [19.9, 552.0], [20.0, 552.0], [20.1, 552.0], [20.2, 553.0], [20.3, 553.0], [20.4, 553.0], [20.5, 553.0], [20.6, 553.0], [20.7, 553.0], [20.8, 553.0], [20.9, 553.0], [21.0, 554.0], [21.1, 554.0], [21.2, 554.0], [21.3, 554.0], [21.4, 554.0], [21.5, 555.0], [21.6, 555.0], [21.7, 555.0], [21.8, 555.0], [21.9, 555.0], [22.0, 555.0], [22.1, 555.0], [22.2, 556.0], [22.3, 556.0], [22.4, 556.0], [22.5, 556.0], [22.6, 556.0], [22.7, 556.0], [22.8, 557.0], [22.9, 557.0], [23.0, 557.0], [23.1, 557.0], [23.2, 557.0], [23.3, 557.0], [23.4, 557.0], [23.5, 558.0], [23.6, 558.0], [23.7, 558.0], [23.8, 558.0], [23.9, 558.0], [24.0, 558.0], [24.1, 558.0], [24.2, 558.0], [24.3, 558.0], [24.4, 559.0], [24.5, 559.0], [24.6, 559.0], [24.7, 559.0], [24.8, 559.0], [24.9, 559.0], [25.0, 560.0], [25.1, 560.0], [25.2, 560.0], [25.3, 560.0], [25.4, 560.0], [25.5, 560.0], [25.6, 560.0], [25.7, 561.0], [25.8, 561.0], [25.9, 561.0], [26.0, 561.0], [26.1, 561.0], [26.2, 561.0], [26.3, 562.0], [26.4, 562.0], [26.5, 562.0], [26.6, 562.0], [26.7, 562.0], [26.8, 562.0], [26.9, 563.0], [27.0, 563.0], [27.1, 563.0], [27.2, 563.0], [27.3, 563.0], [27.4, 563.0], [27.5, 563.0], [27.6, 564.0], [27.7, 564.0], [27.8, 564.0], [27.9, 564.0], [28.0, 564.0], [28.1, 564.0], [28.2, 564.0], [28.3, 564.0], [28.4, 565.0], [28.5, 565.0], [28.6, 565.0], [28.7, 565.0], [28.8, 565.0], [28.9, 565.0], [29.0, 565.0], [29.1, 566.0], [29.2, 566.0], [29.3, 566.0], [29.4, 566.0], [29.5, 566.0], [29.6, 566.0], [29.7, 567.0], [29.8, 567.0], [29.9, 567.0], [30.0, 567.0], [30.1, 567.0], [30.2, 568.0], [30.3, 568.0], [30.4, 568.0], [30.5, 568.0], [30.6, 568.0], [30.7, 568.0], [30.8, 568.0], [30.9, 568.0], [31.0, 569.0], [31.1, 569.0], [31.2, 569.0], [31.3, 569.0], [31.4, 569.0], [31.5, 569.0], [31.6, 569.0], [31.7, 570.0], [31.8, 570.0], [31.9, 570.0], [32.0, 570.0], [32.1, 570.0], [32.2, 571.0], [32.3, 571.0], [32.4, 571.0], [32.5, 571.0], [32.6, 571.0], [32.7, 572.0], [32.8, 572.0], [32.9, 572.0], [33.0, 572.0], [33.1, 572.0], [33.2, 572.0], [33.3, 573.0], [33.4, 573.0], [33.5, 573.0], [33.6, 573.0], [33.7, 573.0], [33.8, 574.0], [33.9, 574.0], [34.0, 574.0], [34.1, 574.0], [34.2, 574.0], [34.3, 574.0], [34.4, 574.0], [34.5, 575.0], [34.6, 575.0], [34.7, 575.0], [34.8, 575.0], [34.9, 575.0], [35.0, 575.0], [35.1, 575.0], [35.2, 576.0], [35.3, 576.0], [35.4, 576.0], [35.5, 576.0], [35.6, 576.0], [35.7, 576.0], [35.8, 577.0], [35.9, 577.0], [36.0, 577.0], [36.1, 577.0], [36.2, 578.0], [36.3, 578.0], [36.4, 578.0], [36.5, 578.0], [36.6, 578.0], [36.7, 579.0], [36.8, 579.0], [36.9, 579.0], [37.0, 579.0], [37.1, 579.0], [37.2, 579.0], [37.3, 579.0], [37.4, 579.0], [37.5, 580.0], [37.6, 580.0], [37.7, 580.0], [37.8, 580.0], [37.9, 581.0], [38.0, 581.0], [38.1, 581.0], [38.2, 581.0], [38.3, 581.0], [38.4, 581.0], [38.5, 581.0], [38.6, 582.0], [38.7, 582.0], [38.8, 582.0], [38.9, 582.0], [39.0, 583.0], [39.1, 583.0], [39.2, 583.0], [39.3, 583.0], [39.4, 583.0], [39.5, 583.0], [39.6, 583.0], [39.7, 584.0], [39.8, 584.0], [39.9, 584.0], [40.0, 584.0], [40.1, 584.0], [40.2, 584.0], [40.3, 585.0], [40.4, 585.0], [40.5, 585.0], [40.6, 585.0], [40.7, 585.0], [40.8, 585.0], [40.9, 586.0], [41.0, 586.0], [41.1, 586.0], [41.2, 586.0], [41.3, 586.0], [41.4, 587.0], [41.5, 587.0], [41.6, 587.0], [41.7, 587.0], [41.8, 587.0], [41.9, 588.0], [42.0, 588.0], [42.1, 588.0], [42.2, 588.0], [42.3, 588.0], [42.4, 589.0], [42.5, 589.0], [42.6, 589.0], [42.7, 589.0], [42.8, 589.0], [42.9, 589.0], [43.0, 590.0], [43.1, 590.0], [43.2, 590.0], [43.3, 590.0], [43.4, 590.0], [43.5, 590.0], [43.6, 591.0], [43.7, 591.0], [43.8, 591.0], [43.9, 591.0], [44.0, 592.0], [44.1, 592.0], [44.2, 592.0], [44.3, 592.0], [44.4, 592.0], [44.5, 593.0], [44.6, 593.0], [44.7, 593.0], [44.8, 593.0], [44.9, 593.0], [45.0, 594.0], [45.1, 594.0], [45.2, 594.0], [45.3, 595.0], [45.4, 595.0], [45.5, 595.0], [45.6, 595.0], [45.7, 596.0], [45.8, 596.0], [45.9, 596.0], [46.0, 596.0], [46.1, 597.0], [46.2, 597.0], [46.3, 597.0], [46.4, 597.0], [46.5, 597.0], [46.6, 597.0], [46.7, 598.0], [46.8, 598.0], [46.9, 598.0], [47.0, 598.0], [47.1, 598.0], [47.2, 598.0], [47.3, 599.0], [47.4, 599.0], [47.5, 599.0], [47.6, 599.0], [47.7, 600.0], [47.8, 600.0], [47.9, 600.0], [48.0, 600.0], [48.1, 601.0], [48.2, 601.0], [48.3, 601.0], [48.4, 601.0], [48.5, 601.0], [48.6, 601.0], [48.7, 601.0], [48.8, 601.0], [48.9, 602.0], [49.0, 602.0], [49.1, 602.0], [49.2, 602.0], [49.3, 602.0], [49.4, 603.0], [49.5, 603.0], [49.6, 603.0], [49.7, 603.0], [49.8, 604.0], [49.9, 604.0], [50.0, 604.0], [50.1, 604.0], [50.2, 604.0], [50.3, 604.0], [50.4, 605.0], [50.5, 605.0], [50.6, 605.0], [50.7, 605.0], [50.8, 606.0], [50.9, 606.0], [51.0, 606.0], [51.1, 606.0], [51.2, 606.0], [51.3, 606.0], [51.4, 607.0], [51.5, 607.0], [51.6, 607.0], [51.7, 608.0], [51.8, 608.0], [51.9, 608.0], [52.0, 608.0], [52.1, 608.0], [52.2, 608.0], [52.3, 609.0], [52.4, 609.0], [52.5, 609.0], [52.6, 609.0], [52.7, 609.0], [52.8, 610.0], [52.9, 610.0], [53.0, 610.0], [53.1, 611.0], [53.2, 611.0], [53.3, 611.0], [53.4, 611.0], [53.5, 612.0], [53.6, 612.0], [53.7, 612.0], [53.8, 613.0], [53.9, 613.0], [54.0, 613.0], [54.1, 613.0], [54.2, 614.0], [54.3, 614.0], [54.4, 614.0], [54.5, 615.0], [54.6, 615.0], [54.7, 615.0], [54.8, 615.0], [54.9, 615.0], [55.0, 616.0], [55.1, 616.0], [55.2, 616.0], [55.3, 616.0], [55.4, 617.0], [55.5, 617.0], [55.6, 617.0], [55.7, 618.0], [55.8, 618.0], [55.9, 618.0], [56.0, 619.0], [56.1, 619.0], [56.2, 620.0], [56.3, 620.0], [56.4, 620.0], [56.5, 620.0], [56.6, 621.0], [56.7, 621.0], [56.8, 622.0], [56.9, 622.0], [57.0, 622.0], [57.1, 622.0], [57.2, 623.0], [57.3, 623.0], [57.4, 623.0], [57.5, 623.0], [57.6, 624.0], [57.7, 624.0], [57.8, 624.0], [57.9, 624.0], [58.0, 625.0], [58.1, 625.0], [58.2, 625.0], [58.3, 626.0], [58.4, 626.0], [58.5, 626.0], [58.6, 626.0], [58.7, 627.0], [58.8, 627.0], [58.9, 627.0], [59.0, 628.0], [59.1, 628.0], [59.2, 628.0], [59.3, 628.0], [59.4, 629.0], [59.5, 629.0], [59.6, 629.0], [59.7, 630.0], [59.8, 630.0], [59.9, 630.0], [60.0, 630.0], [60.1, 630.0], [60.2, 630.0], [60.3, 631.0], [60.4, 631.0], [60.5, 632.0], [60.6, 632.0], [60.7, 632.0], [60.8, 632.0], [60.9, 633.0], [61.0, 633.0], [61.1, 633.0], [61.2, 633.0], [61.3, 634.0], [61.4, 634.0], [61.5, 634.0], [61.6, 635.0], [61.7, 635.0], [61.8, 635.0], [61.9, 636.0], [62.0, 636.0], [62.1, 637.0], [62.2, 637.0], [62.3, 637.0], [62.4, 638.0], [62.5, 638.0], [62.6, 638.0], [62.7, 639.0], [62.8, 639.0], [62.9, 640.0], [63.0, 640.0], [63.1, 640.0], [63.2, 641.0], [63.3, 641.0], [63.4, 641.0], [63.5, 642.0], [63.6, 642.0], [63.7, 642.0], [63.8, 643.0], [63.9, 643.0], [64.0, 643.0], [64.1, 644.0], [64.2, 644.0], [64.3, 645.0], [64.4, 645.0], [64.5, 646.0], [64.6, 646.0], [64.7, 646.0], [64.8, 646.0], [64.9, 647.0], [65.0, 647.0], [65.1, 647.0], [65.2, 647.0], [65.3, 648.0], [65.4, 648.0], [65.5, 649.0], [65.6, 649.0], [65.7, 649.0], [65.8, 649.0], [65.9, 650.0], [66.0, 650.0], [66.1, 650.0], [66.2, 650.0], [66.3, 651.0], [66.4, 651.0], [66.5, 651.0], [66.6, 652.0], [66.7, 652.0], [66.8, 653.0], [66.9, 653.0], [67.0, 653.0], [67.1, 654.0], [67.2, 654.0], [67.3, 654.0], [67.4, 654.0], [67.5, 655.0], [67.6, 655.0], [67.7, 656.0], [67.8, 656.0], [67.9, 657.0], [68.0, 657.0], [68.1, 658.0], [68.2, 659.0], [68.3, 659.0], [68.4, 660.0], [68.5, 660.0], [68.6, 660.0], [68.7, 660.0], [68.8, 661.0], [68.9, 662.0], [69.0, 662.0], [69.1, 662.0], [69.2, 662.0], [69.3, 663.0], [69.4, 663.0], [69.5, 664.0], [69.6, 664.0], [69.7, 665.0], [69.8, 665.0], [69.9, 665.0], [70.0, 666.0], [70.1, 666.0], [70.2, 666.0], [70.3, 667.0], [70.4, 668.0], [70.5, 668.0], [70.6, 668.0], [70.7, 669.0], [70.8, 669.0], [70.9, 669.0], [71.0, 670.0], [71.1, 670.0], [71.2, 670.0], [71.3, 671.0], [71.4, 671.0], [71.5, 671.0], [71.6, 672.0], [71.7, 672.0], [71.8, 673.0], [71.9, 673.0], [72.0, 673.0], [72.1, 673.0], [72.2, 674.0], [72.3, 674.0], [72.4, 675.0], [72.5, 675.0], [72.6, 675.0], [72.7, 676.0], [72.8, 677.0], [72.9, 677.0], [73.0, 677.0], [73.1, 678.0], [73.2, 679.0], [73.3, 680.0], [73.4, 680.0], [73.5, 681.0], [73.6, 682.0], [73.7, 682.0], [73.8, 683.0], [73.9, 684.0], [74.0, 684.0], [74.1, 684.0], [74.2, 685.0], [74.3, 685.0], [74.4, 686.0], [74.5, 686.0], [74.6, 687.0], [74.7, 687.0], [74.8, 687.0], [74.9, 687.0], [75.0, 688.0], [75.1, 688.0], [75.2, 689.0], [75.3, 689.0], [75.4, 690.0], [75.5, 690.0], [75.6, 691.0], [75.7, 692.0], [75.8, 692.0], [75.9, 693.0], [76.0, 693.0], [76.1, 694.0], [76.2, 694.0], [76.3, 695.0], [76.4, 696.0], [76.5, 696.0], [76.6, 697.0], [76.7, 698.0], [76.8, 698.0], [76.9, 698.0], [77.0, 699.0], [77.1, 699.0], [77.2, 700.0], [77.3, 701.0], [77.4, 702.0], [77.5, 703.0], [77.6, 704.0], [77.7, 705.0], [77.8, 706.0], [77.9, 706.0], [78.0, 707.0], [78.1, 707.0], [78.2, 708.0], [78.3, 709.0], [78.4, 710.0], [78.5, 710.0], [78.6, 711.0], [78.7, 711.0], [78.8, 712.0], [78.9, 712.0], [79.0, 713.0], [79.1, 713.0], [79.2, 714.0], [79.3, 714.0], [79.4, 715.0], [79.5, 716.0], [79.6, 717.0], [79.7, 718.0], [79.8, 718.0], [79.9, 719.0], [80.0, 719.0], [80.1, 720.0], [80.2, 722.0], [80.3, 723.0], [80.4, 724.0], [80.5, 725.0], [80.6, 726.0], [80.7, 727.0], [80.8, 727.0], [80.9, 728.0], [81.0, 728.0], [81.1, 729.0], [81.2, 730.0], [81.3, 731.0], [81.4, 732.0], [81.5, 733.0], [81.6, 734.0], [81.7, 736.0], [81.8, 737.0], [81.9, 738.0], [82.0, 739.0], [82.1, 739.0], [82.2, 740.0], [82.3, 741.0], [82.4, 742.0], [82.5, 743.0], [82.6, 744.0], [82.7, 745.0], [82.8, 745.0], [82.9, 746.0], [83.0, 747.0], [83.1, 750.0], [83.2, 752.0], [83.3, 753.0], [83.4, 755.0], [83.5, 756.0], [83.6, 760.0], [83.7, 761.0], [83.8, 762.0], [83.9, 763.0], [84.0, 764.0], [84.1, 767.0], [84.2, 769.0], [84.3, 771.0], [84.4, 772.0], [84.5, 773.0], [84.6, 774.0], [84.7, 774.0], [84.8, 775.0], [84.9, 776.0], [85.0, 777.0], [85.1, 779.0], [85.2, 780.0], [85.3, 781.0], [85.4, 782.0], [85.5, 784.0], [85.6, 785.0], [85.7, 787.0], [85.8, 788.0], [85.9, 790.0], [86.0, 792.0], [86.1, 793.0], [86.2, 795.0], [86.3, 797.0], [86.4, 798.0], [86.5, 799.0], [86.6, 800.0], [86.7, 802.0], [86.8, 805.0], [86.9, 808.0], [87.0, 811.0], [87.1, 811.0], [87.2, 813.0], [87.3, 814.0], [87.4, 816.0], [87.5, 817.0], [87.6, 818.0], [87.7, 820.0], [87.8, 821.0], [87.9, 823.0], [88.0, 827.0], [88.1, 827.0], [88.2, 829.0], [88.3, 831.0], [88.4, 832.0], [88.5, 835.0], [88.6, 835.0], [88.7, 836.0], [88.8, 837.0], [88.9, 839.0], [89.0, 842.0], [89.1, 844.0], [89.2, 846.0], [89.3, 848.0], [89.4, 852.0], [89.5, 856.0], [89.6, 857.0], [89.7, 859.0], [89.8, 859.0], [89.9, 861.0], [90.0, 863.0], [90.1, 864.0], [90.2, 868.0], [90.3, 869.0], [90.4, 872.0], [90.5, 872.0], [90.6, 874.0], [90.7, 875.0], [90.8, 877.0], [90.9, 880.0], [91.0, 881.0], [91.1, 882.0], [91.2, 885.0], [91.3, 887.0], [91.4, 890.0], [91.5, 892.0], [91.6, 893.0], [91.7, 900.0], [91.8, 901.0], [91.9, 906.0], [92.0, 909.0], [92.1, 910.0], [92.2, 913.0], [92.3, 916.0], [92.4, 919.0], [92.5, 922.0], [92.6, 924.0], [92.7, 932.0], [92.8, 935.0], [92.9, 936.0], [93.0, 939.0], [93.1, 940.0], [93.2, 947.0], [93.3, 952.0], [93.4, 957.0], [93.5, 966.0], [93.6, 971.0], [93.7, 976.0], [93.8, 981.0], [93.9, 986.0], [94.0, 993.0], [94.1, 994.0], [94.2, 1000.0], [94.3, 1002.0], [94.4, 1009.0], [94.5, 1011.0], [94.6, 1014.0], [94.7, 1035.0], [94.8, 1045.0], [94.9, 1058.0], [95.0, 1065.0], [95.1, 1074.0], [95.2, 1091.0], [95.3, 1108.0], [95.4, 1139.0], [95.5, 1153.0], [95.6, 1193.0], [95.7, 1260.0], [95.8, 1329.0], [95.9, 1506.0], [96.0, 1529.0], [96.1, 1541.0], [96.2, 1564.0], [96.3, 1581.0], [96.4, 1612.0], [96.5, 1626.0], [96.6, 1635.0], [96.7, 1650.0], [96.8, 1671.0], [96.9, 1713.0], [97.0, 1772.0], [97.1, 1855.0], [97.2, 1988.0], [97.3, 2158.0], [97.4, 2190.0], [97.5, 2202.0], [97.6, 2211.0], [97.7, 2238.0], [97.8, 2264.0], [97.9, 2322.0], [98.0, 2519.0], [98.1, 2905.0], [98.2, 4807.0], [98.3, 5326.0], [98.4, 6762.0], [98.5, 9573.0], [98.6, 10030.0], [98.7, 11297.0], [98.8, 11670.0], [98.9, 12080.0], [99.0, 13192.0], [99.1, 14478.0], [99.2, 15796.0], [99.3, 16085.0], [99.4, 17822.0], [99.5, 19322.0], [99.6, 20277.0], [99.7, 23489.0], [99.8, 24507.0], [99.9, 26694.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 2193.0, "series": [{"data": [[600.0, 1356.0], [700.0, 434.0], [800.0, 235.0], [900.0, 115.0], [1000.0, 49.0], [1100.0, 16.0], [1200.0, 6.0], [1300.0, 3.0], [1400.0, 4.0], [1500.0, 23.0], [1600.0, 22.0], [1700.0, 8.0], [1800.0, 5.0], [1900.0, 3.0], [2000.0, 1.0], [2100.0, 12.0], [2300.0, 5.0], [2200.0, 16.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 1.0], [2900.0, 1.0], [4300.0, 1.0], [4400.0, 1.0], [4600.0, 1.0], [4800.0, 2.0], [4700.0, 1.0], [4900.0, 1.0], [5300.0, 3.0], [6100.0, 1.0], [6200.0, 1.0], [6600.0, 1.0], [6700.0, 2.0], [8400.0, 1.0], [9100.0, 1.0], [9500.0, 1.0], [9600.0, 1.0], [9400.0, 1.0], [9700.0, 1.0], [10000.0, 3.0], [9800.0, 1.0], [11100.0, 1.0], [11000.0, 1.0], [11200.0, 1.0], [11600.0, 3.0], [11400.0, 1.0], [11500.0, 1.0], [11700.0, 1.0], [11900.0, 1.0], [12000.0, 2.0], [11800.0, 1.0], [12700.0, 1.0], [12900.0, 1.0], [12800.0, 1.0], [13100.0, 1.0], [13300.0, 1.0], [14100.0, 1.0], [14400.0, 2.0], [14900.0, 1.0], [15300.0, 2.0], [15700.0, 1.0], [15500.0, 1.0], [16000.0, 4.0], [17100.0, 1.0], [17200.0, 1.0], [17400.0, 1.0], [16900.0, 1.0], [17900.0, 1.0], [18300.0, 1.0], [17800.0, 1.0], [19300.0, 1.0], [18900.0, 2.0], [20200.0, 1.0], [19800.0, 1.0], [20000.0, 1.0], [20100.0, 1.0], [21100.0, 1.0], [20700.0, 1.0], [21600.0, 1.0], [23400.0, 1.0], [22600.0, 1.0], [24100.0, 1.0], [24500.0, 1.0], [24000.0, 1.0], [23800.0, 1.0], [25500.0, 1.0], [25100.0, 1.0], [26600.0, 2.0], [25700.0, 1.0], [27000.0, 1.0], [27700.0, 1.0], [28200.0, 1.0], [28600.0, 1.0], [500.0, 2193.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 28600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 189.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4411.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4411.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 189.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 31.78571428571429, "minX": 1.6504482E12, "maxY": 48.08730583824322, "series": [{"data": [[1.65044826E12, 36.42589187201179], [1.6504482E12, 31.78571428571429], [1.65044832E12, 48.08730583824322]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65044832E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 545.2857142857141, "minX": 1.0, "maxY": 28663.0, "series": [{"data": [[2.0, 13377.0], [3.0, 11297.0], [4.0, 13192.0], [5.0, 16943.0], [6.0, 16043.0], [7.0, 17443.0], [8.0, 14447.0], [9.0, 18934.0], [10.0, 20125.0], [11.0, 23802.0], [12.0, 20029.0], [13.0, 24070.0], [14.0, 19868.0], [15.0, 25799.0], [16.0, 22634.0], [17.0, 26616.0], [18.0, 28663.0], [19.0, 28296.0], [20.0, 27749.0], [21.0, 27021.0], [22.0, 25101.0], [23.0, 909.1818181818181], [24.0, 639.4791666666669], [25.0, 545.2857142857141], [26.0, 566.0116279069769], [27.0, 546.7234042553191], [28.0, 581.8666666666668], [29.0, 632.2400000000004], [30.0, 652.8666666666664], [31.0, 707.2391304347826], [33.0, 676.1503267973856], [32.0, 882.252100840336], [35.0, 790.0053763440859], [34.0, 812.4625000000001], [37.0, 841.6584362139921], [36.0, 799.128888888889], [39.0, 907.7241379310344], [38.0, 807.9623430962342], [41.0, 813.4600938967139], [40.0, 775.9914893617025], [42.0, 970.2732919254656], [43.0, 636.3275862068966], [45.0, 1028.1931818181813], [44.0, 1013.0384615384618], [47.0, 845.2031250000001], [46.0, 817.2159090909091], [49.0, 753.6600000000001], [48.0, 736.719298245614], [50.0, 722.2168674698794], [51.0, 996.4720000000001], [52.0, 1200.4769230769232], [53.0, 708.2741935483873], [54.0, 928.975806451613], [55.0, 967.6106194690265], [56.0, 1096.9574468085107], [57.0, 1107.5], [59.0, 1259.6041666666665], [58.0, 1079.296296296296], [61.0, 1327.6046511627908], [60.0, 839.549019607843], [62.0, 1370.6153846153848], [63.0, 914.3157894736842], [64.0, 905.391304347826], [65.0, 784.5555555555555], [67.0, 1000.0], [66.0, 1178.8], [68.0, 890.0], [1.0, 17822.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[41.14478260869584, 932.7291304347835]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 68.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 28.466666666666665, "minX": 1.6504482E12, "maxY": 352462.4, "series": [{"data": [[1.65044826E12, 352462.4], [1.6504482E12, 1814.8], [1.65044832E12, 242012.16666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65044826E12, 5528.633333333333], [1.6504482E12, 28.466666666666665], [1.65044832E12, 3796.233333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65044832E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 622.5714285714286, "minX": 1.6504482E12, "maxY": 1175.011247991431, "series": [{"data": [[1.65044826E12, 767.9632217727097], [1.6504482E12, 622.5714285714286], [1.65044832E12, 1175.011247991431]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65044832E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 621.4285714285713, "minX": 1.6504482E12, "maxY": 1159.1397964649166, "series": [{"data": [[1.65044826E12, 749.4343508642896], [1.6504482E12, 621.4285714285713], [1.65044832E12, 1159.1397964649166]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65044832E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 260.8382431708622, "minX": 1.6504482E12, "maxY": 264.78852519308487, "series": [{"data": [[1.65044826E12, 264.78852519308487], [1.6504482E12, 262.14285714285717], [1.65044832E12, 260.8382431708622]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65044832E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 516.0, "minX": 1.6504482E12, "maxY": 28663.0, "series": [{"data": [[1.65044826E12, 18320.0], [1.6504482E12, 730.0], [1.65044832E12, 28663.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65044826E12, 740.0], [1.6504482E12, 718.0], [1.65044832E12, 955.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65044826E12, 6541.400000000058], [1.6504482E12, 730.0], [1.65044832E12, 20419.079999999973]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65044826E12, 900.0], [1.6504482E12, 730.0], [1.65044832E12, 1227.5999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65044826E12, 516.0], [1.6504482E12, 532.0], [1.65044832E12, 520.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65044826E12, 581.0], [1.6504482E12, 632.5], [1.65044832E12, 658.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65044832E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 536.0, "minX": 1.0, "maxY": 28022.5, "series": [{"data": [[2.0, 28022.5], [37.0, 646.5], [36.0, 604.0], [39.0, 536.0], [41.0, 598.5], [40.0, 659.5], [42.0, 626.5], [43.0, 590.0], [45.0, 604.5], [44.0, 616.0], [46.0, 575.5], [47.0, 596.0], [49.0, 571.0], [48.0, 591.5], [3.0, 19948.5], [50.0, 642.0], [51.0, 599.5], [52.0, 629.5], [53.0, 645.0], [14.0, 632.5], [57.0, 604.0], [4.0, 14617.5], [1.0, 27021.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 57.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 535.0, "minX": 1.0, "maxY": 28022.5, "series": [{"data": [[2.0, 28022.5], [37.0, 646.0], [36.0, 603.5], [39.0, 535.0], [41.0, 596.0], [40.0, 654.5], [42.0, 623.0], [43.0, 588.0], [45.0, 598.5], [44.0, 613.5], [46.0, 573.0], [47.0, 595.5], [49.0, 566.0], [48.0, 590.0], [3.0, 19948.0], [50.0, 634.5], [51.0, 593.0], [52.0, 623.5], [53.0, 643.0], [14.0, 632.5], [57.0, 603.0], [4.0, 14616.5], [1.0, 27021.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 57.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.6504482E12, "maxY": 45.46666666666667, "series": [{"data": [[1.65044826E12, 45.46666666666667], [1.6504482E12, 0.6833333333333333], [1.65044832E12, 30.516666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65044832E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.6504482E12, "maxY": 45.31666666666667, "series": [{"data": [[1.65044826E12, 45.31666666666667], [1.6504482E12, 0.23333333333333334], [1.65044832E12, 31.116666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65044832E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.6504482E12, "maxY": 45.31666666666667, "series": [{"data": [[1.65044826E12, 45.31666666666667], [1.6504482E12, 0.23333333333333334], [1.65044832E12, 31.116666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65044832E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.6504482E12, "maxY": 45.31666666666667, "series": [{"data": [[1.65044826E12, 45.31666666666667], [1.6504482E12, 0.23333333333333334], [1.65044832E12, 31.116666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65044832E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

