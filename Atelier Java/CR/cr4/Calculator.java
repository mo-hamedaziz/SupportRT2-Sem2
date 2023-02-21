package s4;


import java.awt.*;
import javax.swing.*;


class Calculator extends JFrame{
	
	private JPanel pan;
    private JButton b1, b2,b3 ;
    private JTextArea txt;
    private GridLayout grid1;
    private JButton boutons[]=new JButton[10];
    public Calculator ()
    {
    	//Setting the frame
        this.setTitle ("Calculator") ;
        this.setSize (300, 500) ;
        
        Container contenu = this.getContentPane() ;
        //Creating the panel to put the buttons
        pan= new JPanel();
        grid1= new GridLayout(4,4); //Creating a 4x4 grid
        pan.setLayout(grid1);  //Setting panel to gridLayout
        
        //Creating buttons
        for (int i=0 ; i< 10 ; i++){
            boutons[i]= new JButton(""+i);
        }
        
        //Adding buttons
        pan.add(boutons[7]);
        pan.add(boutons[8]);
        pan.add(boutons[9]);
        pan.add(new JButton("/"));  //adding + creating button
        pan.add(boutons[4]);
        pan.add(boutons[5]);
        pan.add(boutons[6]);
        pan.add(new JButton("*"));  //adding + creating button
        pan.add(boutons[1]);
        pan.add(boutons[2]);
        pan.add(boutons[3]);
        pan.add(new JButton("-"));  //adding + creating button
        pan.add(boutons[0]);
        pan.add(new JButton("."));  //adding + creating button
        pan.add(new JButton("="));  //adding + creating button
        pan.add(new JButton("+"));  //adding + creating button
        
        //Creating the text Area
        txt = new JTextArea(5,5);
        
        contenu.add(txt, BorderLayout.NORTH);  //Putting the textArea on top
        contenu.add(pan); 
        this.setVisible(true);
        this.setLocationRelativeTo(null);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
 
}