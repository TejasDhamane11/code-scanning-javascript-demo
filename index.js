cricketList = [
    {
      player: "Monster",
      category: "basket",
      showLess:false
    },
    {
      player: "Roach",
      category: "cricket",
      showLess:false
    },
    {
      player: "Messi",
      category: "football",
      showLess:false
    },
    {
      player: "Ms",
      category: "carrom",
      showLess:false
    },
    {
      player: "Fedral",
      category: "tennis",
      showLess:false
    }
        
  ];

&lt;div style="display: flex;justify-content: space-evenly;"&gt;
    &lt;div *ngFor="let value of cricketList"&gt;
        &lt;p (click)='clickOntab(tab)'&gt;{{value.player}}&lt;/p&gt;
        &lt;button class="staticIcon"   (onShown)="onPopoverShown()" mat-icon-button&gt;
        &lt;mat-icon *ngIf="!value.showLess" (click)="showResult(value)"&gt;expand_more&lt;/mat-icon&gt;
            &lt;mat-icon *ngIf="value.showLess" (click)="hideResult(value)"&gt;expand_less&lt;/mat-icon&gt;
     &lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;

showResult(param){
   
    param.showLess = true;
  }
  hideResult(param) {
    param.showLess = false;
  }

 ----------------------- 
cricketList = [
    {
      player: "Monster",
      category: "basket",
      showLess:false
    },
    {
      player: "Roach",
      category: "cricket",
      showLess:false
    },
    {
      player: "Messi",
      category: "football",
      showLess:false
    },
    {
      player: "Ms",
      category: "carrom",
      showLess:false
    },
    {
      player: "Fedral",
      category: "tennis",
      showLess:false
    }
        
  ];

&lt;div style="display: flex;justify-content: space-evenly;"&gt;
    &lt;div *ngFor="let value of cricketList"&gt;
        &lt;p (click)='clickOntab(tab)'&gt;{{value.player}}&lt;/p&gt;
        &lt;button class="staticIcon"   (onShown)="onPopoverShown()" mat-icon-button&gt;
        &lt;mat-icon *ngIf="!value.showLess" (click)="showResult(value)"&gt;expand_more&lt;/mat-icon&gt;
            &lt;mat-icon *ngIf="value.showLess" (click)="hideResult(value)"&gt;expand_less&lt;/mat-icon&gt;
     &lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;

showResult(param){
   
    param.showLess = true;
  }
  hideResult(param) {
    param.showLess = false;
  }

 ----------------------- 
cricketList = [
    {
      player: "Monster",
      category: "basket",
      showLess:false
    },
    {
      player: "Roach",
      category: "cricket",
      showLess:false
    },
    {
      player: "Messi",
      category: "football",
      showLess:false
    },
    {
      player: "Ms",
      category: "carrom",
      showLess:false
    },
    {
      player: "Fedral",
      category: "tennis",
      showLess:false
    }
        
  ];

&lt;div style="display: flex;justify-content: space-evenly;"&gt;
    &lt;div *ngFor="let value of cricketList"&gt;
        &lt;p (click)='clickOntab(tab)'&gt;{{value.player}}&lt;/p&gt;
        &lt;button class="staticIcon"   (onShown)="onPopoverShown()" mat-icon-button&gt;
        &lt;mat-icon *ngIf="!value.showLess" (click)="showResult(value)"&gt;expand_more&lt;/mat-icon&gt;
            &lt;mat-icon *ngIf="value.showLess" (click)="hideResult(value)"&gt;expand_less&lt;/mat-icon&gt;
     &lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;

showResult(param){
   
    param.showLess = true;
  }
  hideResult(param) {
    param.showLess = false;
  }

 ----------------------- 
&lt;div style="display: flex;justify-content: space-evenly;"&gt;
    &lt;div *ngFor="let value of cricketList; let i = index"&gt;
        &lt;p (click)='clickOntab(tab)' &gt;{{value.player}}&lt;/p&gt;
    &lt;button class="staticIcon" (onShown)="onPopoverShown()" (click)="toggleResult(i)" mat-icon-button&gt;
        &lt;mat-icon *ngIf="value.showMore"&gt;expand_more&lt;/mat-icon&gt;
        &lt;mat-icon *ngIf="!value.showMore"&gt;expand_less&lt;/mat-icon&gt;
     &lt;/button&gt;  
    &lt;/div&gt;
&lt;/div&gt;

   cricketList = [
    {
      player: "Monster",
      category: "basket",
      showMore: false
    },
    {
      player: "Roach",
      category: "cricket",
      showMore: false
    },
    {
      player: "Messi",
      category: "football",
      showMore: false
    },
    {
      player: "Ms",
      category: "carrom",
      showMore: false
    },
    {
      player: "Fedral",
      category: "tennis",
      showMore: false
    }
        
  ];

  toggleResult(i) {
    this.cricketList[i].showMore = !this.cricketList[i].showMore;
  }

 ----------------------- 
&lt;div style="display: flex;justify-content: space-evenly;"&gt;
    &lt;div *ngFor="let value of cricketList; let i = index"&gt;
        &lt;p (click)='clickOntab(tab)' &gt;{{value.player}}&lt;/p&gt;
    &lt;button class="staticIcon" (onShown)="onPopoverShown()" (click)="toggleResult(i)" mat-icon-button&gt;
        &lt;mat-icon *ngIf="value.showMore"&gt;expand_more&lt;/mat-icon&gt;
        &lt;mat-icon *ngIf="!value.showMore"&gt;expand_less&lt;/mat-icon&gt;
     &lt;/button&gt;  
    &lt;/div&gt;
&lt;/div&gt;

   cricketList = [
    {
      player: "Monster",
      category: "basket",
      showMore: false
    },
    {
      player: "Roach",
      category: "cricket",
      showMore: false
    },
    {
      player: "Messi",
      category: "football",
      showMore: false
    },
    {
      player: "Ms",
      category: "carrom",
      showMore: false
    },
    {
      player: "Fedral",
      category: "tennis",
      showMore: false
    }
        
  ];

  toggleResult(i) {
    this.cricketList[i].showMore = !this.cricketList[i].showMore;
  }
