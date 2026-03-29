import React, { useState } from 'react';
import './InfoPages.css';

const SizeGuide = () => {
  const [activeTab, setActiveTab] = useState('men');

  return (
    <div className="info-page">
      <div className="container">
        <h1>Size Guide</h1>
        <p className="page-intro">
          Find your perfect fit with our comprehensive size charts. Measurements are in inches.
        </p>

        <div className="size-guide-tabs">
          <button 
            className={`tab ${activeTab === 'men' ? 'active' : ''}`}
            onClick={() => setActiveTab('men')}
          >
            Men
          </button>
          <button 
            className={`tab ${activeTab === 'women' ? 'active' : ''}`}
            onClick={() => setActiveTab('women')}
          >
            Women
          </button>
          <button 
            className={`tab ${activeTab === 'kids' ? 'active' : ''}`}
            onClick={() => setActiveTab('kids')}
          >
            Kids
          </button>
        </div>

        {activeTab === 'men' && (
          <div className="size-content">
            <h2>Men's Clothing</h2>
            
            <h3>Shirts & T-Shirts</h3>
            <div className="size-table-container">
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest (inches)</th>
                    <th>Waist (inches)</th>
                    <th>Length (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>S</td><td>36-38</td><td>30-32</td><td>27-28</td></tr>
                  <tr><td>M</td><td>38-40</td><td>32-34</td><td>28-29</td></tr>
                  <tr><td>L</td><td>40-42</td><td>34-36</td><td>29-30</td></tr>
                  <tr><td>XL</td><td>42-44</td><td>36-38</td><td>30-31</td></tr>
                  <tr><td>XXL</td><td>44-46</td><td>38-40</td><td>31-32</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Pants & Jeans</h3>
            <div className="size-table-container">
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Waist (inches)</th>
                    <th>Hip (inches)</th>
                    <th>Length (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>28</td><td>28-29</td><td>35-36</td><td>39-40</td></tr>
                  <tr><td>30</td><td>30-31</td><td>37-38</td><td>40-41</td></tr>
                  <tr><td>32</td><td>32-33</td><td>39-40</td><td>41-42</td></tr>
                  <tr><td>34</td><td>34-35</td><td>41-42</td><td>42-43</td></tr>
                  <tr><td>36</td><td>36-37</td><td>43-44</td><td>43-44</td></tr>
                  <tr><td>38</td><td>38-39</td><td>45-46</td><td>44-45</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Indian Kurtas</h3>
            <div className="size-table-container">
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest (inches)</th>
                    <th>Length (inches)</th>
                    <th>Shoulder (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>S</td><td>38</td><td>38-40</td><td>16-17</td></tr>
                  <tr><td>M</td><td>40</td><td>40-42</td><td>17-18</td></tr>
                  <tr><td>L</td><td>42</td><td>42-44</td><td>18-19</td></tr>
                  <tr><td>XL</td><td>44</td><td>44-46</td><td>19-20</td></tr>
                  <tr><td>XXL</td><td>46</td><td>46-48</td><td>20-21</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'women' && (
          <div className="size-content">
            <h2>Women's Clothing</h2>
            
            <h3>Tops & Dresses</h3>
            <div className="size-table-container">
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Bust (inches)</th>
                    <th>Waist (inches)</th>
                    <th>Hip (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>XS</td><td>30-32</td><td>24-26</td><td>34-36</td></tr>
                  <tr><td>S</td><td>32-34</td><td>26-28</td><td>36-38</td></tr>
                  <tr><td>M</td><td>34-36</td><td>28-30</td><td>38-40</td></tr>
                  <tr><td>L</td><td>36-38</td><td>30-32</td><td>40-42</td></tr>
                  <tr><td>XL</td><td>38-40</td><td>32-34</td><td>42-44</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Pants & Jeans</h3>
            <div className="size-table-container">
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Waist (inches)</th>
                    <th>Hip (inches)</th>
                    <th>Length (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>26</td><td>26-27</td><td>35-36</td><td>37-38</td></tr>
                  <tr><td>28</td><td>28-29</td><td>37-38</td><td>38-39</td></tr>
                  <tr><td>30</td><td>30-31</td><td>39-40</td><td>39-40</td></tr>
                  <tr><td>32</td><td>32-33</td><td>41-42</td><td>40-41</td></tr>
                  <tr><td>34</td><td>34-35</td><td>43-44</td><td>41-42</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Sarees & Lehengas</h3>
            <div className="size-info">
              <p><strong>Sarees:</strong> Standard length is 5.5-6 meters. One size fits all.</p>
              <p><strong>Blouse:</strong> Available in sizes XS, S, M, L, XL (see tops chart)</p>
              <p><strong>Lehengas:</strong> Customizable. Select size based on waist measurement.</p>
            </div>
          </div>
        )}

        {activeTab === 'kids' && (
          <div className="size-content">
            <h2>Kids' Clothing</h2>
            
            <h3>Boys & Girls (Age-based sizing)</h3>
            <div className="size-table-container">
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Age</th>
                    <th>Height (inches)</th>
                    <th>Chest (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>2-3Y</td><td>2-3 years</td><td>35-38</td><td>20-21</td></tr>
                  <tr><td>4-5Y</td><td>4-5 years</td><td>41-44</td><td>22-23</td></tr>
                  <tr><td>6-7Y</td><td>6-7 years</td><td>47-50</td><td>24-25</td></tr>
                  <tr><td>8-9Y</td><td>8-9 years</td><td>53-56</td><td>26-27</td></tr>
                  <tr><td>10-11Y</td><td>10-11 years</td><td>59-62</td><td>28-30</td></tr>
                </tbody>
              </table>
            </div>

            <div className="size-note">
              <p><strong>Note:</strong> Kids' sizes are approximate. If your child is between sizes, we recommend sizing up for growing room.</p>
            </div>
          </div>
        )}

        <div className="measurement-guide">
          <h2>How to Measure</h2>
          <div className="measurement-steps">
            <div className="measure-step">
              <h3>📏 Chest/Bust</h3>
              <p>Measure around the fullest part of your chest, keeping the tape horizontal.</p>
            </div>
            <div className="measure-step">
              <h3>📏 Waist</h3>
              <p>Measure around your natural waistline, keeping the tape comfortably loose.</p>
            </div>
            <div className="measure-step">
              <h3>📏 Hip</h3>
              <p>Measure around the fullest part of your hips, about 8 inches below your waist.</p>
            </div>
            <div className="measure-step">
              <h3>📏 Length</h3>
              <p>Measure from the highest point of your shoulder to where you want the garment to end.</p>
            </div>
          </div>
        </div>

        <div className="size-tips">
          <h2>Fitting Tips</h2>
          <ul>
            <li>If you're between sizes, we recommend sizing up for a comfortable fit</li>
            <li>Check the specific product description for fit details (slim, regular, relaxed)</li>
            <li>For ethnic wear, measurements may vary slightly from western wear</li>
            <li>All measurements are approximate and may vary by 0.5-1 inch</li>
            <li>Still unsure? Contact our support team for personalized sizing help</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;