Flotr.addType("candles",{options:{show:!1,lineWidth:1,wickLineWidth:1,candleWidth:.6,fill:!0,upFillColor:"#00A8F0",downFillColor:"#CB4B4B",fillOpacity:.5,barcharts:!1},draw:function(l){var o=l.context;o.save(),o.lineJoin="miter",o.lineCap="butt",o.lineWidth=l.wickLineWidth||l.lineWidth,this.plot(l),o.restore()},plot:function(l){var o,t,a,e,i,n,r,h,d,c,f,s,x,m,M,v=l.data,p=l.context,u=l.xScale,W=l.yScale,T=l.candleWidth/2,g=l.shadowSize,w=l.lineWidth,S=l.wickLineWidth,y=S%2/2;if(!(v.length<1))for(M=0;M<v.length;M++)t=v[M],a=t[0],e=t[1],i=t[2],n=t[3],r=t[4],h=u(a-T),d=u(a+T),c=W(n),f=W(i),s=W(Math.min(e,r)),x=W(Math.max(e,r)),o=l[e>r?"downFillColor":"upFillColor"],l.fill&&!l.barcharts&&(p.fillStyle="rgba(0,0,0,0.05)",p.fillRect(h+g,x+g,d-h,s-x),p.save(),p.globalAlpha=l.fillOpacity,p.fillStyle=o,p.fillRect(h,x+w,d-h,s-x),p.restore()),(w||S)&&(a=Math.floor((h+d)/2)+y,p.strokeStyle=o,p.beginPath(),l.barcharts?(p.moveTo(a,Math.floor(f+w)),p.lineTo(a,Math.floor(c+w)),m=r>e,p.moveTo(m?d:h,Math.floor(x+w)),p.lineTo(a,Math.floor(x+w)),p.moveTo(a,Math.floor(s+w)),p.lineTo(m?h:d,Math.floor(s+w))):(p.strokeRect(h,x+w,d-h,s-x),p.moveTo(a,Math.floor(x+w)),p.lineTo(a,Math.floor(f+w)),p.moveTo(a,Math.floor(s+w)),p.lineTo(a,Math.floor(c+w))),p.closePath(),p.stroke())},hit:function(l){var o,t,a,e,i,n,r,h,d=l.xScale,c=l.yScale,f=l.data,s=l.args,x=s[0],m=l.candleWidth/2,M=s[1],v=x.relX,p=x.relY,u=f.length;for(o=0;u>o;o++)if(t=f[o],a=t[2],e=t[3],i=d(t[0]-m),n=d(t[0]+m),h=c(e),r=c(a),v>i&&n>v&&p>r&&h>p)return M.x=t[0],M.index=o,void(M.seriesIndex=l.index)},drawHit:function(l){var o=l.context;o.save(),this.plot(_.defaults({fill:!!l.fillColor,upFillColor:l.color,downFillColor:l.color,data:[l.data[l.args.index]]},l)),o.restore()},clearHit:function(l){var o=l.args,t=l.context,a=l.xScale,e=l.yScale,i=l.lineWidth,n=l.candleWidth/2,r=l.data[o.index],h=a(r[0]-n)-i,d=a(r[0]+n)+i,c=e(r[2]),f=e(r[3])+i;t.clearRect(h,c,d-h,f-c)},extendXRange:function(l){null===l.options.max&&(l.max=Math.max(l.datamax+.5,l.max),l.min=Math.min(l.datamin-.5,l.min))}});