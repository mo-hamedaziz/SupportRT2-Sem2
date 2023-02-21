package s4;

import java.awt.BorderLayout;

import javax.swing.JButton; 
import javax.swing.JFrame; 
import java.awt.*; 

public class ButtonTest extends JFrame{ 
	private JButton yellow; 
	private JButton blue;
	private JButton red; 
	public ButtonTest() { 
		//Setting the frame
		this.setTitle("ButtonTest"); 
		this.setSize(400, 250); 
		
		
		
		Container contenu=this.getContentPane() ;
		
		//Creating buttons
		yellow = new JButton("Yellow");
		blue = new JButton("Blue");
		red = new JButton("Red"); 
		
		
		contenu.setLayout (new FlowLayout(FlowLayout.CENTER,10,180)) ;
		
		//Adding buttons to the container
		contenu.add(yellow);
		contenu.add(blue);
		contenu.add(red); 
		
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); 
		this.setLocationRelativeTo(null);
		this.setResizable(false);
		this.setVisible(true);
	} 


	

}
