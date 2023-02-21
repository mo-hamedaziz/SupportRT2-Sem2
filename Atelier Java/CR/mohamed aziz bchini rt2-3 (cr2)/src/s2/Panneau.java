package s2;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Dimension;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class Panneau extends JPanel{
	
	
	public void paintComponent(Graphics g)
	{
		int x1 = this.getWidth()/4; 
		int y1 = this.getHeight()/4;
		g.drawOval(x1-100, y1-100,this.getWidth()/2+200, this.getHeight()/2+200);
		g.drawOval(x1-20, y1,this.getWidth()/2+40, this.getHeight()/2);
		g.drawRect(x1-20, y1, this.getWidth()/2+40, this.getHeight()/2);
		g.drawLine(x1-20, y1, this.getWidth()/2+x1+20, this.getHeight()/2+y1); 
		

	}
}
