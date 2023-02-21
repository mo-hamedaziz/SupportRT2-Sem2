package s2;

import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class Fenetre extends JFrame{
	
	Panneau pan;
	
	public Fenetre()
	{
		this.setTitle("Ma premier java fenetre");
		this.setSize(600,600);
		this.setLocationRelativeTo(null);
		this.setResizable(false);
		pan=new Panneau();
		this.add(pan);
		this.setVisible(true);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}
	
	public Fenetre(String titre,int lar,int lon)
	{
		
		this.setTitle(titre);
		this.setSize(lar,lon);
		this.setLocationRelativeTo(null);
		this.setVisible(true);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}
}
